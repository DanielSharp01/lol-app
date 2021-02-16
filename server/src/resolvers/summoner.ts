import { LoLAppContext } from "../LoLAppContext";
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { LeagueEntry, Summoner } from "../entities/Summoner";

@Resolver(of => Summoner)
export class SummonerResolver {
    @Query(() => Summoner)
    async summonerByName(@Ctx() { riotApi }: LoLAppContext, @Arg('name') name: string): Promise<Summoner> {
        const summoner = await riotApi.requestSummonerByName(name);
        return {
            ...summoner,
            profileIcon: '',
        };
    }

    @FieldResolver()
    async profileIcon(@Ctx() { dataDragon }: LoLAppContext, @Root() summoner: Summoner): Promise<string> {
        return (await dataDragon.requestProfileIcons())[summoner.profileIconId.toString()]?.full ?? '';
    }

    @FieldResolver()
    async rankedSoloDuo(@Ctx() { riotApi }: LoLAppContext, @Root() summoner: Summoner): Promise<LeagueEntry | null> {
        const entry = (await riotApi.requestSummonerLeagueEntires(summoner.id)).find(e => e.queueType === 'RANKED_SOLO_5x5');
        return entry ? {
            tier: entry.tier,
            division: entry.rank,
            lp: entry.leaguePoints,
            promo: entry.miniSeries ? {
                wins: entry.miniSeries.wins,
                losses: entry.miniSeries.losses,
                games: entry.miniSeries.target,
            } : undefined,
        } : null;
    }
}