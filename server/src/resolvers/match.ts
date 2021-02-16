import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Match } from "../entities/Match";
import { LoLAppContext } from "../LoLAppContext";
import { queueTypes } from "../riot-api/models/constants";

@Resolver(() => Match)
export class MatchResolver {
    @Query(() => Match)
    async matchById(@Ctx() { riotApi }: LoLAppContext, @Arg('id') id: string): Promise<Match> {
        const match = await riotApi.requestMatch(id);
        const ret = new Match();
        ret.gameLength = match.gameDuration;
        ret.gameMode = queueTypes.find(q => q.queueId === match.queueId)?.description?.replace(' games', '') || 'Unknown';
        ret.blueTeam = {
            win: match.teams[0].win === 'Win',
            summoners: match.participants.filter(p => p.teamId === match.teams[0].teamId).map(p => {
                const identity = match.participantIdentities.find(i => i.participantId === p.participantId)?.player!!;
                return {
                    accountId: identity.accountId,
                    id: identity.summonerId,
                    name: identity.summonerName,
                    profileIconId: identity.profileIcon,
                    profileIcon: '',
                    champion: {
                        id: p.championId.toString(),
                        name: '',
                    },
                    championLevel: p.stats.champLevel,
                    deaths: p.stats.kills,
                    kills: p.stats.deaths,
                    assists: p.stats.assists,
                    cs: p.stats.totalMinionsKilled + p.stats.neutralMinionsKilled,
                    gold: p.stats.goldEarned,
                    vision: p.stats.visionScore,
                    keystone: {
                        id: p.stats.perkPrimaryStyle.toString(),
                        name: '',
                    },
                    items: [p.stats.item0 > 0 ? {
                        id: p.stats.item0.toString(),
                        name: '',
                    } : { }, p.stats.item1 > 0 ? {
                        id: p.stats.item1.toString(),
                        name: '',
                    } : { }, p.stats.item2 > 0 ? {
                        id: p.stats.item2.toString(),
                        name: '',
                    } : { }, p.stats.item3 > 0 ? {
                        id: p.stats.item3.toString(),
                        name: '',
                    } : { }, p.stats.item4 > 0 ? {
                        id: p.stats.item4.toString(),
                        name: '',
                    } : { }, p.stats.item5 > 0 ? {
                        id: p.stats.item5.toString(),
                        name: '',
                    } : { }],
                    trinket: p.stats.item6 ? {
                        id: p.stats.item6.toString(),
                        name: '',
                    } : { },
                    summonerD: {
                        id: p.spell1Id.toString(),
                        name: '',
                    },
                    summonerF: {
                        id: p.spell2Id.toString(),
                        name: '',
                    },
                }
            }),
        }
        ret.redTeam = {
            win: match.teams[1].win === 'Win',
            summoners: match.participants.filter(p => p.teamId === match.teams[1].teamId).map(p => {
                const identity = match.participantIdentities.find(i => i.participantId === p.participantId)?.player!!;
                return {
                    accountId: identity.accountId,
                    id: identity.summonerId,
                    name: identity.summonerName,
                    profileIconId: identity.profileIcon,
                    profileIcon: '',
                    champion: {
                        id: p.championId.toString(),
                        name: '',
                    },
                    championLevel: p.stats.champLevel,
                    deaths: p.stats.kills,
                    kills: p.stats.deaths,
                    assists: p.stats.assists,
                    cs: p.stats.totalMinionsKilled + p.stats.neutralMinionsKilled,
                    gold: p.stats.goldEarned,
                    vision: p.stats.visionScore,
                    keystone: {
                        id: p.stats.perkPrimaryStyle.toString(),
                        name: '',
                    },
                    items: [p.stats.item0 > 0 ? {
                        id: p.stats.item0.toString(),
                        name: '',
                    } : { }, p.stats.item1 > 0 ? {
                        id: p.stats.item1.toString(),
                        name: '',
                    } : { }, p.stats.item2 > 0 ? {
                        id: p.stats.item2.toString(),
                        name: '',
                    } : { }, p.stats.item3 > 0 ? {
                        id: p.stats.item3.toString(),
                        name: '',
                    } : { }, p.stats.item4 > 0 ? {
                        id: p.stats.item4.toString(),
                        name: '',
                    } : { }, p.stats.item5 > 0 ? {
                        id: p.stats.item5.toString(),
                        name: '',
                    } : { }],
                    trinket: p.stats.item6 ? {
                        id: p.stats.item6.toString(),
                        name: '',
                    } : { },
                    summonerD: {
                        id: p.spell1Id.toString(),
                        name: '',
                    },
                    summonerF: {
                        id: p.spell2Id.toString(),
                        name: '',
                    },
                }
            }),
        }
        return ret;
    }
}