export const enum AttributeKeys {
    STRENGTH="strength",
    PERCEPTION="perception",
    ENDURANCE="endurance",
    CHARISMA="charisma",
    INTELLIGENCE="intelligence",
    AGILITY="agility",
    LUCK="luck"
}

export type Attributes = {[key in AttributeKeys]: number}

export interface Player {
    attributes: Attributes;
}