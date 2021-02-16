import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { MatchSummoner } from "../entities/MatchSummoner";
import { LeagueEntry } from "../entities/Summoner";
import { LoLAppContext } from "../LoLAppContext";

@Resolver(() => MatchSummoner)
export class MatchSummonerResolver {
    @FieldResolver()
    async profileIcon(@Ctx() { dataDragon }: LoLAppContext, @Root() summoner: MatchSummoner): Promise<string> {
        return (await dataDragon.requestProfileIcons())[summoner.profileIconId.toString()]?.full ?? '';
    }

    @FieldResolver()
    async rankedSoloDuo(@Ctx() { riotApi }: LoLAppContext, @Root() summoner: MatchSummoner): Promise<LeagueEntry | null> {
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