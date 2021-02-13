import { Image } from "./Image";

export interface SummonerSpell {
    id: string;
    name: string;
    key: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: Array<number>;
    cost: Array<number>;
    effect: Array<Array<number | null>>;
    range: Array<number>;
    maxammo: string;
    summonerLevel: number;
    costType: string;
    image: Image;
    resource: string;
    datavalues: any;
    vars: Array<{ key: string, link: string, coeff: Array<number> | number }>;
}