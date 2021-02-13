export type GAME_TYPES = 'CUSTOM_GAME' | 'MATCHED_GAME' | 'TUTORIAL_GAME';
export type PLATFORMS = 'BR1' | 'EUN1' | 'EUW1' | 'JP1' | 'KR' | 'LA1' | 'LA2' | 'NA1' | 'OC1' | 'TR1' | 'RU';
export type GAME_MODES = 'CLASSIC' | 'ARAM' | 'TUTORIAL' | 'ODIN' | 'URF' | 'DOOMBOTSTEEMO' | 'ASCENSION' | 'ONEFORALL'
    | 'FIRSTBLOOD' | 'KINGPORO' | 'SIEGE' | 'ASSASINATE' | 'ARSR' | 'DARKSTAR' | 'STARGUARDIAN' | 'PROJECT' | 'GAMEMODEX'
    | 'ODYSSEY' | 'NXUSBLITZ';

export type safeLong = string;

export type TIERS = 'UNRANKED' | 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND' | 'MASTER' | 'GRANDMASTER' | 'CHALLENGER';

export const queueTypes = [
    {
        "queueId": 0,
        "map": "Custom games",
        "description": null,
        "notes": null
    },
    {
        "queueId": 2,
        "map": "Summoner's Rift",
        "description": "5v5 Blind Pick games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 430"
    },
    {
        "queueId": 4,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Solo games",
        "notes": "Deprecated in favor of queueId 420"
    },
    {
        "queueId": 6,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Premade games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 7,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI games",
        "notes": "Deprecated in favor of queueId 32 and 33"
    },
    {
        "queueId": 8,
        "map": "Twisted Treeline",
        "description": "3v3 Normal games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 460"
    },
    {
        "queueId": 9,
        "map": "Twisted Treeline",
        "description": "3v3 Ranked Flex games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 470"
    },
    {
        "queueId": 14,
        "map": "Summoner's Rift",
        "description": "5v5 Draft Pick games",
        "notes": "Deprecated in favor of queueId 400"
    },
    {
        "queueId": 16,
        "map": "Crystal Scar",
        "description": "5v5 Dominion Blind Pick games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 17,
        "map": "Crystal Scar",
        "description": "5v5 Dominion Draft Pick games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 25,
        "map": "Crystal Scar",
        "description": "Dominion Co-op vs AI games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 31,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Intro Bot games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 830"
    },
    {
        "queueId": 32,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Beginner Bot games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 840"
    },
    {
        "queueId": 33,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Intermediate Bot games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 850"
    },
    {
        "queueId": 41,
        "map": "Twisted Treeline",
        "description": "3v3 Ranked Team games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 42,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Team games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 52,
        "map": "Twisted Treeline",
        "description": "Co-op vs AI games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 800"
    },
    {
        "queueId": 61,
        "map": "Summoner's Rift",
        "description": "5v5 Team Builder games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 65,
        "map": "Howling Abyss",
        "description": "5v5 ARAM games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 450"
    },
    {
        "queueId": 67,
        "map": "Howling Abyss",
        "description": "ARAM Co-op vs AI games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 70,
        "map": "Summoner's Rift",
        "description": "One for All games",
        "notes": "Deprecated in patch 8.6 in favor of queueId 1020"
    },
    {
        "queueId": 72,
        "map": "Howling Abyss",
        "description": "1v1 Snowdown Showdown games",
        "notes": null
    },
    {
        "queueId": 73,
        "map": "Howling Abyss",
        "description": "2v2 Snowdown Showdown games",
        "notes": null
    },
    {
        "queueId": 75,
        "map": "Summoner's Rift",
        "description": "6v6 Hexakill games",
        "notes": null
    },
    {
        "queueId": 76,
        "map": "Summoner's Rift",
        "description": "Ultra Rapid Fire games",
        "notes": null
    },
    {
        "queueId": 78,
        "map": "Howling Abyss",
        "description": "One For All: Mirror Mode games",
        "notes": null
    },
    {
        "queueId": 83,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Ultra Rapid Fire games",
        "notes": null
    },
    {
        "queueId": 91,
        "map": "Summoner's Rift",
        "description": "Doom Bots Rank 1 games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 950"
    },
    {
        "queueId": 92,
        "map": "Summoner's Rift",
        "description": "Doom Bots Rank 2 games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 950"
    },
    {
        "queueId": 93,
        "map": "Summoner's Rift",
        "description": "Doom Bots Rank 5 games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 950"
    },
    {
        "queueId": 96,
        "map": "Crystal Scar",
        "description": "Ascension games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 910"
    },
    {
        "queueId": 98,
        "map": "Twisted Treeline",
        "description": "6v6 Hexakill games",
        "notes": null
    },
    {
        "queueId": 100,
        "map": "Butcher's Bridge",
        "description": "5v5 ARAM games",
        "notes": null
    },
    {
        "queueId": 300,
        "map": "Howling Abyss",
        "description": "Legend of the Poro King games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 920"
    },
    {
        "queueId": 310,
        "map": "Summoner's Rift",
        "description": "Nemesis games",
        "notes": null
    },
    {
        "queueId": 313,
        "map": "Summoner's Rift",
        "description": "Black Market Brawlers games",
        "notes": null
    },
    {
        "queueId": 315,
        "map": "Summoner's Rift",
        "description": "Nexus Siege games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 940"
    },
    {
        "queueId": 317,
        "map": "Crystal Scar",
        "description": "Definitely Not Dominion games",
        "notes": null
    },
    {
        "queueId": 318,
        "map": "Summoner's Rift",
        "description": "ARURF games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 900"
    },
    {
        "queueId": 325,
        "map": "Summoner's Rift",
        "description": "All Random games",
        "notes": null
    },
    {
        "queueId": 400,
        "map": "Summoner's Rift",
        "description": "5v5 Draft Pick games",
        "notes": null
    },
    {
        "queueId": 410,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Dynamic games",
        "notes": "Game mode deprecated in patch 6.22"
    },
    {
        "queueId": 420,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Solo games",
        "notes": null
    },
    {
        "queueId": 430,
        "map": "Summoner's Rift",
        "description": "5v5 Blind Pick games",
        "notes": null
    },
    {
        "queueId": 440,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Flex games",
        "notes": null
    },
    {
        "queueId": 450,
        "map": "Howling Abyss",
        "description": "5v5 ARAM games",
        "notes": null
    },
    {
        "queueId": 460,
        "map": "Twisted Treeline",
        "description": "3v3 Blind Pick games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 470,
        "map": "Twisted Treeline",
        "description": "3v3 Ranked Flex games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 600,
        "map": "Summoner's Rift",
        "description": "Blood Hunt Assassin games",
        "notes": null
    },
    {
        "queueId": 610,
        "map": "Cosmic Ruins",
        "description": "Dark Star: Singularity games",
        "notes": null
    },
    {
        "queueId": 700,
        "map": "Summoner's Rift",
        "description": "Clash games",
        "notes": null
    },
    {
        "queueId": 800,
        "map": "Twisted Treeline",
        "description": "Co-op vs. AI Intermediate Bot games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 810,
        "map": "Twisted Treeline",
        "description": "Co-op vs. AI Intro Bot games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 820,
        "map": "Twisted Treeline",
        "description": "Co-op vs. AI Beginner Bot games",
        "notes": null
    },
    {
        "queueId": 830,
        "map": "Summoner's Rift",
        "description": "Co-op vs. AI Intro Bot games",
        "notes": null
    },
    {
        "queueId": 840,
        "map": "Summoner's Rift",
        "description": "Co-op vs. AI Beginner Bot games",
        "notes": null
    },
    {
        "queueId": 850,
        "map": "Summoner's Rift",
        "description": "Co-op vs. AI Intermediate Bot games",
        "notes": null
    },
    {
        "queueId": 900,
        "map": "Summoner's Rift",
        "description": "URF games",
        "notes": null
    },
    {
        "queueId": 910,
        "map": "Crystal Scar",
        "description": "Ascension games",
        "notes": null
    },
    {
        "queueId": 920,
        "map": "Howling Abyss",
        "description": "Legend of the Poro King games",
        "notes": null
    },
    {
        "queueId": 940,
        "map": "Summoner's Rift",
        "description": "Nexus Siege games",
        "notes": null
    },
    {
        "queueId": 950,
        "map": "Summoner's Rift",
        "description": "Doom Bots Voting games",
        "notes": null
    },
    {
        "queueId": 960,
        "map": "Summoner's Rift",
        "description": "Doom Bots Standard games",
        "notes": null
    },
    {
        "queueId": 980,
        "map": "Valoran City Park",
        "description": "Star Guardian Invasion: Normal games",
        "notes": null
    },
    {
        "queueId": 990,
        "map": "Valoran City Park",
        "description": "Star Guardian Invasion: Onslaught games",
        "notes": null
    },
    {
        "queueId": 1000,
        "map": "Overcharge",
        "description": "PROJECT: Hunters games",
        "notes": null
    },
    {
        "queueId": 1010,
        "map": "Summoner's Rift",
        "description": "Snow ARURF games",
        "notes": null
    },
    {
        "queueId": 1020,
        "map": "Summoner's Rift",
        "description": "One for All games",
        "notes": null
    },
    {
        "queueId": 1030,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Intro games",
        "notes": null
    },
    {
        "queueId": 1040,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Cadet games",
        "notes": null
    },
    {
        "queueId": 1050,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Crewmember games",
        "notes": null
    },
    {
        "queueId": 1060,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Captain games",
        "notes": null
    },
    {
        "queueId": 1070,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Onslaught games",
        "notes": null
    },
    {
        "queueId": 1090,
        "map": "Convergence",
        "description": "Teamfight Tactics games",
        "notes": null
    },
    {
        "queueId": 1100,
        "map": "Convergence",
        "description": "Ranked Teamfight Tactics games",
        "notes": null
    },
    {
        "queueId": 1110,
        "map": "Convergence",
        "description": "Teamfight Tactics Tutorial games",
        "notes": null
    },
    {
        "queueId": 1111,
        "map": "Convergence",
        "description": "Teamfight Tactics test games",
        "notes": null
    },
    {
        "queueId": 1200,
        "map": "Nexus Blitz",
        "description": "Nexus Blitz games",
        "notes": "Deprecated in patch 9.2"
    },
    {
        "queueId": 1300,
        "map": "Nexus Blitz",
        "description": "Nexus Blitz games",
        "notes": null
    },
    {
        "queueId": 2000,
        "map": "Summoner's Rift",
        "description": "Tutorial 1",
        "notes": null
    },
    {
        "queueId": 2010,
        "map": "Summoner's Rift",
        "description": "Tutorial 2",
        "notes": null
    },
    {
        "queueId": 2020,
        "map": "Summoner's Rift",
        "description": "Tutorial 3",
        "notes": null
    }
];

export const seasons = [
    {
        "id": 0,
        "season": "PRESEASON 3"
    },
    {
        "id": 1,
        "season": "SEASON 3"
    },
    {
        "id": 2,
        "season": "PRESEASON 2014"
    },
    {
        "id": 3,
        "season": "SEASON 2014"
    },
    {
        "id": 4,
        "season": "PRESEASON 2015"
    },
    {
        "id": 5,
        "season": "SEASON 2015"
    },
    {
        "id": 6,
        "season": "PRESEASON 2016"
    },
    {
        "id": 7,
        "season": "SEASON 2016"
    },
    {
        "id": 8,
        "season": "PRESEASON 2017"
    },
    {
        "id": 9,
        "season": "SEASON 2017"
    },
    {
        "id": 10,
        "season": "PRESEASON 2018"
    },
    {
        "id": 11,
        "season": "SEASON 2018"
    },
    {
        "id": 12,
        "season": "PRESEASON 2019"
    },
    {
        "id": 13,
        "season": "SEASON 2019"
    },
    {
        "id": 14,
        "season": "PRESEASON 2020"
    },
    {
        "id": 15,
        "season": "SEASON 2020"
    },
    {
        "id": 16,
        "season": "PRESEASON 2021"
    },
    {
        "id": 17,
        "season": "SEASON 2021"
    }
];

export const maps = [
    {
        "mapId": 1,
        "mapName": "Summoner's Rift",
        "notes": "Original Summer variant"
    },
    {
        "mapId": 2,
        "mapName": "Summoner's Rift",
        "notes": "Original Autumn variant"
    },
    {
        "mapId": 3,
        "mapName": "The Proving Grounds",
        "notes": "Tutorial Map"
    },
    {
        "mapId": 4,
        "mapName": "Twisted Treeline",
        "notes": "Original Version"
    },
    {
        "mapId": 8,
        "mapName": "The Crystal Scar",
        "notes": "Dominion map"
    },
    {
        "mapId": 10,
        "mapName": "Twisted Treeline",
        "notes": "Last TT map"
    },
    {
        "mapId": 11,
        "mapName": "Summoner's Rift",
        "notes": "Current Version"
    },
    {
        "mapId": 12,
        "mapName": "Howling Abyss",
        "notes": "ARAM map"
    },
    {
        "mapId": 14,
        "mapName": "Butcher's Bridge",
        "notes": "Alternate ARAM map"
    },
    {
        "mapId": 16,
        "mapName": "Cosmic Ruins",
        "notes": "Dark Star: Singularity map"
    },
    {
        "mapId": 18,
        "mapName": "Valoran City Park",
        "notes": "Star Guardian Invasion map"
    },
    {
        "mapId": 19,
        "mapName": "Substructure 43",
        "notes": "PROJECT: Hunters map"
    },
    {
        "mapId": 20,
        "mapName": "Crash Site",
        "notes": "Odyssey: Extraction map"
    },
    {
        "mapId": 20,
        "mapName": "Convergence",
        "notes": "Teamfight Tactics map"
    },
    {
        "mapId": 21,
        "mapName": "Nexus Blitz",
        "notes": "Nexus Blitz map"
    }
]