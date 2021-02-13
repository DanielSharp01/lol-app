import { GAME_MODES, GAME_TYPES, PLATFORMS, safeLong, TIERS } from "./constants";

export interface Match {
    gameId: safeLong;
    participantIdentities: Array<ParticipantIdentity>;
    queueId: number;
    gameType: GAME_TYPES;
    gameCreation: number;
    gameDuration: number;
    platformId: PLATFORMS;
    gameMode: GAME_MODES;
    teams: Array<TeamStats>;
    seasonId: number;
    gameVersion: string;
    mapId: number;
    participants: Array<Participant>;
}

export interface ParticipantIdentity {
    participantId: number;
    player: Player;
}

export interface Player {
    profileIcon: number;
    accountId: string;
    platformId: string;
    currentAccountId: string;
    currentPlatformId: string;
    summonerName: string;
    summonerId: string;
    matchHistoryUri: string;
}

export interface TeamStats {
    towerKills: number;
    riftHeraldKills: number;
    firstBlood: boolean;
    inhibitorKills: number;
    bans: Array<TeamBan>;
    firstBaron: boolean;
    firstDragon: boolean;
    dominionVictoryScore: number;
    dragonKils: number;
    baronKills: number;
    firstInhibitor: boolean;
    firstTower: boolean;
    vilemawKills: number;
    firstRiftHerald: boolean;
    teamId: 100 | 200;
    win: 'Fail' | 'Win'; // Remake?
}

export interface TeamBan {
    championId: number;
    pickTurn: number;
}

export interface Participant {
    participantId: number;
    championId: number;
    stats: ParticipantStat;
    teamId: 100 | 200;
    timeline: ParticipantTimeline;
    spell1Id: number;
    spell2Id: number;
    highestAchievedSeasonTier: TIERS;
    runes?: Array<{
        runeId: number;
        rank: number;
    }>; // Legacy runes
    masteries?: {
        masteryId: number;
        rank: number;
    }; // Legacy masteries
}

export interface ParticipantStat {
   item0: number;
   item1: number;
   item2: number;
   item3: number;
   item4: number;
   item5: number; 
   item6: number;
   largestMultiKill: number;
   goldEarned: number;
   totalUnitsHealed: number;
   physicalDamageTaken: number;
   nodeNeutralizeAssist: number;
   totalPlayerScore: number;
   champLevel: number;
   damageDealtToObjectives: number;
   totalDamageTaken: number;
   neutralMinionsKilled: number;
   deaths: number;
   tripleKills: number;
   magicDamageDealtToChampions: number;
   wardsKilled: number;
   pentaKills: number;
   damageSelfMitigated: number;
   largestCriticalStrike: number;
   nodeNeutralize: number;
   totalTimeCrowdControlDealt: number;
   firstTowerKill: boolean;
   magicDamageDealt: number;
   totalScoreRank: number;
   nodeCapture: number;
   wardsPlaced: number;
   totalDamageDealt: number;
   timeCCingOthers: number;
   magicalDamageTaken: number;
   largestKillingSpree: number;
   totalDamageDealtToChampions: number;
   phyisicalDamageDealtToChampions: number;
   neutralMinionsKilledTeamJungle: number;
   totalMinionsKilled: number;
   firstInhibitorAssist: boolean;
   visionWardsBoughtInGame: number;
   objectivePlayerScore: number;
   kills: number;
   firstTowerAssist: boolean;
   combatPlayerScore: number;
   inhibitorKills: number;
   turretKills: number;
   participantId: number;
   trueDamageTaken: number;
   firstBloodAssist: boolean;
   nodeCaptureAssist: number;
   assists: number;
   teamObjective: number;
   altarsNeutralized: number;
   goldSpent: number;
   damageDealtToTurrets: number;
   altarsCaptured: number;
   win: boolean;
   totalHeal: number;
   unrealKills: number;
   visionScore: number;
   phyisicalDamageDealt: number;
   firstBloodKill: boolean;
   longestTimeSpentLiving: number;
   killingSprees: number;
   sightWardsBoughtInGame: number;
   trueDamageDealtToChampions: number;
   neutralMinionsKilledEnemyJungle: number;
   doubleKills: number;
   trueDamageDealt: number;
   quadraKills: number;
   firstInhibitorKill: boolean;
   playerScore0: number;
   playerScore1: number;
   playerScore2: number;
   playerScore3: number;
   playerScore4: number;
   playerScore5: number;
   playerScore6: number;
   playerScore7: number;
   playerScore8: number;
   playerScore9: number;
   perk0: number;
   perk0Var1: number;
   perk0Var2: number;
   perk0Var3: number;
   perk1: number;
   perk1Var1: number;
   perk1Var2: number;
   perk1Var3: number;
   perk2: number;
   perk2Var1: number;
   perk2Var2: number;
   perk2Var3: number;
   perk3: number;
   perk3Var1: number;
   perk3Var2: number;
   perk3Var3: number;
   perk4: number;
   perk4Var1: number;
   perk4Var2: number;
   perk4Var3: number;
   perk5: number;
   perk5Var1: number;
   perk5Var2: number;
   perk5Var3: number;
   perkPrimaryStyle: number;
   perkSubStyle: number;
   statPerk0: number;
   statPerk1: number;
   statPerk2: number;
}

export interface ParticipantTimeline {
    participantId: number;
    role: string;
    lane: string;
    creepsPerMinDeltas: { [key: string]: number },
    csDiffPerMinDeltas: { [key: string]: number },
    damageTakenPerMinDeltas: { [key: string]: number },
    damageTakenDiffPerMinDeltas: { [key: string]: number },
    xpPerMinDeltas: { [key: string]: number },
    xpDiffPerMinDeltas: { [key: string]: number },
    goldPerMinDeltas: { [key: string]: number },
}