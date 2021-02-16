export interface Item {
    id: string;
    name: string;
}

export interface MatchSummoner {
    name: string;
    profileIcon: string;
    summonerLevel: number;
    champion: string;
    championLevel: number;
    kills: number;
    deaths: number;
    assists: number;
    cs: number;
    vision: number;
    gold: number;
    rankedSoloDuo: {
        tier: string;
        division: string;
        lp: number;
        promo: {
            wins: number;
            losses: number;
        }
    },
    keystone: string;
    summonerD: string;
    summonerF: string;
    items: Array<Item | null>;
    trinket: Item | null;
}