export interface MatchTimeline {
    frames: Array<MatchFrame>
    frameInterval: number;
}

export interface MatchFrame {
    timestamp: number;
    participantFrames: { [key: string]: MatchParticipantFrame };
    events: Array<MatchEvent>;
}

export interface MatchParticipantFrame {
    participantId: number;
    minionsKilled: number;
    teamScore: number;
    dominionScore: number;
    level: number;
    xp: number;
    currentGold: number;
    position: { x: number; y: number };
    jungleMinionsKilled: number;
}

export interface MatchEvent {
    type: 'CHAMPION_KILL' | 'WARD_PLACED' | 'WARD_KILL' | 'BUILDING_KILL' | 'ELITE_MONSTER_KILL' | 'ITEM_PURCHASED'
        | 'ITEM_SOLD' | 'ITEM_DESTROYED' | 'ITEM_UNDO' | 'SKILL_LEVEL_UP' | 'ASCENDED_EVENT' | 'CAPTURE_POINT' | 'PORO_KING_SUMMON';
    laneType: string;
    skillSlot: number;
    ascendedType: string;
    creatorId: number;
    eventType: string;
    levelUpType: string;
    wardType: string;
    participantId: number;
    towerType: string;
    itemId: number;
    beforeId: number;
    afterId: number;
    pointCaptureId: string;
    monsterType: string;
    monsterSubType: string;
    teamId: 100 | 200;
    position: { x: number, y: number };
    killerId: number;
    timestamp: number;
    assistingParticipantsIds: Array<number>;
    buildingType: string;
    victimId: number;
}