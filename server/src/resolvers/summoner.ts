import { LoLAppContext } from "../LoLAppContext";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Summoner } from "../entities/Summoner";

@Resolver()
export class SummonerResolver {
    @Query(() => Summoner)
    async summonerByName(@Ctx() { riotApi, dataDragon }: LoLAppContext, @Arg('name') name: string): Promise<Summoner> {
        const summoner = await riotApi.requestSummonerByName(name);
        return {
            ...summoner,
            profileIcon: (await dataDragon.requestProfileIcons())[summoner.profileIconId.toString()]?.full ?? '',
        };
    }
}