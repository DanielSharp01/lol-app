import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { DataDragon } from "./riot-api/DataDragon";
import { RiotApi } from "./riot-api/RiotApi";

export interface LoLAppContext {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    riotApi: RiotApi;
    dataDragon: DataDragon;
    req: Express.Request;
    res: Express.Response;
}