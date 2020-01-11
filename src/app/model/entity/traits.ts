import {
  AttributeModifier,
  DerivativeAttributeModifier,
  Effect,
  MoreViolentDeathAnimations,
  SkillModifier
} from "./utility/effects";

export interface Fallout2Trait {
  name: string,
  effect: Effect[]
}

export class Fallout2Traits {
  // TODO: With perk Mutate! player can change one trait more
  readonly traitsToDistribute = 2;

  private readonly traits: Fallout2Trait[] = [
    // TODO: Changes the ending
    {name: "bloodyMess", effect: [MoreViolentDeathAnimations()]},
    {name: "bruiser", effect: [AttributeModifier("strength", 2), DerivativeAttributeModifier("actionPoint", -2)]},
    // TODO: Faster recovery from chem addictions, Twice the chance to become addicted
    {name: "chemReliant", effect: []},
    // TODO: Half the chance to get addicted, chems last half as long
    {name: "chemResistant", effect: []},
    // TODO: Poison Resistance and Radiation Resistance start at 0%
    // TODO: Unavailable to ghouls and robots
    {name: "fastMetabolism", effect: [DerivativeAttributeModifier("healingRate", 2)]},
    // TODO: All throwing and firearm attacks cost 1 less AP. Cannot aim attacks
    {name: "fastShot", effect: []},
    // TODO: -30% total damage
    {name: "finesse", effect: [DerivativeAttributeModifier("criticalChance", 10)]},
    // TODO: +1 to all SPECIAL stats, -10% to all skills, 5 less skill points per level
    {name: "gifted", effect: []},
    {
      name: "goodNatured", effect: [
        SkillModifier("firstAid", 15),
        SkillModifier("doctor", 15),
        SkillModifier("speech", 15),
        SkillModifier("barter", 15),
        SkillModifier("bigGuns", -10),
        SkillModifier("smallGuns", -10),
        SkillModifier("energyWeapons", -10),
        SkillModifier("throwing", -10),
        SkillModifier("meleeWeapons", -10),
        SkillModifier("unarmed", -10),]
    },
    // TODO: +4 Melee Damage, -30% modifier to the critical hit tables
    {name: "heavyHanded", effect: []},
    // TODO: More critical failures for everyone around you. More critical failures for you, too
    // TODO: Not available to pick at start. Only as an effect of being joined by Pariah dog in the A lone surviving dog special encounter.
    {name: "jinxed", effect: []},
    // TODO: +5 Sequence. No natural Armor Class
    {name: "kamikaze", effect: []},
    // TODO: +20% chance to hit with one-handed weapons. -40% chance to hit with two-handed weapons
    // TODO: Completely unarmed attacks, such as Hammer Punch, are unaffected by this trait giving them neither a bonus nor penalty.
    {name: "oneHander", effect: []},
    // TODO: Opposite sex characters react more favorably. Same sex characters are annoyed
    /**
     * This trait improves reaction towards the protagonist of members of the opposite sex. Unfortunately, this trait also worsens reaction of members of their own. This trait does not factor in to the interactions with non-human characters, meaning that no bonus will be gained with a female ghoul as a male character.
     *
     * Although this often factors into sexual encounters the character may have, this trait can apply to many things happening throughout the game.
     *
     * Through the reaction mechanic, this trait will also affect the prices received from shopkeepers. Since most shopkeepers are male, female characters may benefit greatly from this. Likewise, a male character will receive a slight increase in price from male shopkeepers. Of course, they will reap the benefits of a discount from (the few) female ones.
     */
    {name: "sexAppeal", effect: []},
    // TODO: +5 skill points per level. +1 Perk rate
    {name: "skilled", effect: []},
    // TODO: +1 Agility. Carry Weight = 25 + (15 x your Strength)
    {name: "smallFrame", effect: []},
  ];
}
