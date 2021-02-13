import { Image } from "./Image";

export type ChampionTag = 'Fighter' | 'Tank' | 'Mage' | 'Marksman'; // TODO: Get em all

export interface Champion {
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number,
        defense: number,
        magic: number,
        difficulty: number,
    };
    image: Image;
    tags: Array<ChampionTag>;
    partype: string;
    stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeed: number;
        attackspeedperlevel: number;
    }
}

export interface ChampionDetailed extends Champion {
    skins: Array<ChampionSkin>
    lore: string;
    allyTips: Array<string>;
    enemyTips: Array<string>;
    spells: ChampionSpell;
    passive: {
        name: string;
        description: string;
        image: Image;
    }
    recommended: any; // TODO: Maybe do this later
}

export interface ChampionSkin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

export interface ChampionSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
        label: Array<string>,
        effect: Array<string>,
    },
    maxrank: number;
    cooldown: Array<number>;
    cost: Array<number>;
    effect: Array<Array<number | null>>;
    range: Array<number>;
    maxammo: string;
    costType: string;
    image: Image;
    resource: string;
    datavalues: any;
    vars: Array<{ key: string, link: string, coeff: Array<number> | number }>;
}