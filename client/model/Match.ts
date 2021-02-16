import { MatchSummoner } from "./MatchSummoner";

export interface Match {
    gameMode: string;
    gameLength: number;
    blueTeam: {
        win: boolean;
        summoners: Array<MatchSummoner>;
    },
    redTeam: {
        win: boolean;
        summoners: Array<MatchSummoner>;
    }
}