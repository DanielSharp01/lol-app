import { MikroORM } from "@mikro-orm/core";
import config from './mikro-orm-config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RequestScheduler } from "./request-scheduler/RequestScheduler";
import { DataDragon } from "./riot-api/DataDragon";
import { RiotApi } from "./riot-api/RiotApi";
import { SummonerResolver } from "./resolvers/summoner";

(async () => {
    const orm = await MikroORM.init(config);
    const scheduler = new RequestScheduler(20, 100, 120, 40);
    const dataDragon = new DataDragon();
    await dataDragon.awaitVersion();
    const riotApi = new RiotApi(process.env.RIOT_API_KEY ?? '', scheduler);
    await orm.getMigrator().up();
    const app = express();
    const port = process.env.PORT ?? 4000;
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [SummonerResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ em: orm.em, riotApi, dataDragon, req, res }),
    });
    apolloServer.applyMiddleware({ app });
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})();