import { PLATFORMS, safeLong } from "./constants";

export interface MathListResponse {
    startIndex: number;
    endIndex: number;
    totalGames: number;
    matches: Array<MatchReference>
}

export interface MatchReference {
    gameId: safeLong;
    role: string;
    lane: string;
    season: number;
    platformId: PLATFORMS;
    champion: number;
    queue: number;
    timestamp: number;
}