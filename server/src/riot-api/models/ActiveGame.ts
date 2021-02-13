import { GAME_MODES, GAME_TYPES, PLATFORMS, safeLong } from "./constants";

export interface ActiveGame {
    gameId: safeLong;
    gameType: GAME_TYPES;
    gameStartTime: number;
    gameLength: number;
    platformId: PLATFORMS;
    gameMode: GAME_MODES;
    bannedChampions: Array<BannedChampion>,
    gameQueueConfigId: number,
    observers: { 
        encyptionKey: string;
    }
    participants: Array<CurrentGameParticipant>;
}

export interface BannedChampion {
    pickTurn: number;
    championId: number;
    teamId: 100 | 200;
}

export interface CurrentGameParticipant {
    championId: number;
    perks: Perks;
    profileIconId: number;
    bot: boolean;
    teamId: 100 | 200;
    summonerName: string;
    summonerId: safeLong;
    spell1Id: number;
    spell2Id: number;
    gameCustomizationObjects: Array<{
        category: string;
        content: string;
    }>;
}

export interface Perks {
    perkIds: Array<safeLong>;
    perkStyle: safeLong;
    perkSubStyle: safeLong;
}