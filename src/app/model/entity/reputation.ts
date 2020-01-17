import {noLessThan, noMoreThan} from "../../utils/utils";
import {Sex} from "./character-entity";

export enum GeneralReputationLevels {
  NEGATIVE,
  NEUTRAL,
  POSITIVE
}

// TODO: : Companions should be affected by karma
//  Recruitment
//  Disbanding
// TODO: : Map to specific values: 250, 500, 750, 1000
export class Fallout2Reputation {
  generalReputation: number = 0;

  readonly classify = () => {
    if (this.generalReputation > -250 && this.generalReputation < 250) {
      return GeneralReputationLevels.NEUTRAL;
    } else if (this.generalReputation < 0) {
      return GeneralReputationLevels.NEGATIVE;
    } else if (this.generalReputation > 0) {
      return GeneralReputationLevels.POSITIVE;
    }

    throw new Error();
  };

  readonly specificValue = () => {
    if (this.generalReputation < -1000) {
      return -4;
    } else if (this.generalReputation < -750) {
      return -3;
    } else if (this.generalReputation < -500) {
      return -2;
    } else if (this.generalReputation < -250) {
      return -1;
    }

    if (this.generalReputation > 1000) {
      return 4;
    } else if (this.generalReputation > 750) {
      return 3;
    } else if (this.generalReputation > 500) {
      return 2;
    } else if (this.generalReputation > 250) {
      return 1;
    }

    return 0;
  };
}

// TODO: : Map to specific values: 1, 15, 30
export class Fallout2TownReputation {
  townReputation: number = 0;

  readonly classify = () => {
    if (this.townReputation === 0) {
      return GeneralReputationLevels.NEUTRAL;
    } else if (this.townReputation < 0) {
      return GeneralReputationLevels.NEGATIVE;
    } else if (this.townReputation > 0) {
      return GeneralReputationLevels.POSITIVE;
    }

    throw new Error();
  };
}

export interface Fallout2PlayerReputation {
  requirements: []
  effects: []
}

// TODO: : Map to specific values: 1, 15, 30
export class Fallout2PlayerReputations {
  berserker: Fallout2PlayerReputation = {
    // TODO: Kill at least 25 people, and at least twice as many Good people as Bad people
    requirements: [],
    // TODO: Bad characters have a better reaction toward you in dialogue
    // TODO: Good characters have a worse reaction toward you in dialogue
    effects: []
  };
  champion: Fallout2PlayerReputation = {
    // TODO: Don't have the Childkiller title
    // TODO: Killing many characters with bad Karma and having good or very good Karma
    requirements: [],
    // TODO: Good characters have a better reaction toward you in dialogue
    effects: []
  };
  childkiller: Fallout2PlayerReputation = {
    // TODO: Killing children
    requirements: [],
    // TODO: -30 points to initial reaction of both good and evil NPCs.
    //  Bounty hunters can be met during random encounters. Their equipment depends on your level, ranging from leather jackets and hunting rifles to power armor and miniguns (includes Avenger miniguns in Fallout 2).
    effects: []
  };
  gigolo: Fallout2PlayerReputation = {
    // TODO: You get this title by passing the obj_sex_rating formula once with a rating of 9.
    requirements: [],
    effects: []
  };
  graveDigger: Fallout2PlayerReputation = {
    // TODO: Dig up a grave
    requirements: [],
    // TODO: -5 Karma PER GRAVE
    effects: []
  };
  // TODO: Track which family made you a made man
  madeMan: Fallout2PlayerReputation = {
    // TODO: Join one of the four mafia families in New Reno
    requirements: [],
    // TODO: Increased popularity in New Reno.
    //  Access to free sex at the Cat's Paw.
    //  Special stock and discounts available at the New Reno Arms.
    //  Jagged Jimmy J can be paralyzed if the Chosen One has an Intelligence below 4 and whenever by talking about "the mortal coil."
    //  An opportunity to try the porn audition at the Golden Globes even with Charisma < 9.
    //  Hated by other mafia families.
    //  Drug dealers and bartenders in New Reno charge more.
    effects: []
  };
  married: Fallout2PlayerReputation = {
    // TODO: Marrying companion
    requirements: [],
    // TODO: companion become a permanent companion.
    // TODO: companion cannot wait.
    effects: []
  };
  pornStar: Fallout2PlayerReputation = {
    // TODO: Star in a porn film at the Golden Globes in New Reno
    requirements: [],
    // TODO: Popularities in New Reno (only a female Porn Star will get infamy from New Reno prostitutes).
    //  One can paralyze Jagged Jimmy J with an Intelligence below 4 by asking him about "this mortal coil? Or is it only possible when we free ourselves from our physical bodies?".
    //  A female Chosen One can have sex with Lil' Jesus Mordino and T-Ray, even with Charisma less than 6
    //  Ethyl Wright will not speak to porn stars.
    //  Drug dealers in New Reno charge less.
    effects: []
  };
  prizefighter: Fallout2PlayerReputation = {
    // TODO: You get this title by defeating the Masticator or Xander Holyland during the final boxing match at the Jungle Gym in New Reno.
    requirements: [],
    // TODO: You get popularity in New Reno.
    //  +5% Unarmed
    //  +5% Damage Resistance
    //  You can paralyze Jagged Jimmy J when you have Intelligence of less than 4.
    //  You can try the porn audition at the Golden Globes if you have Charisma less than 9.
    //  Drug dealers and bartenders in New Reno charge you less.
    effects: []
  };
  // TODO: Substitutes married
  separated: Fallout2PlayerReputation = {
    // TODO: Have your spouse killed, sold into slavery or get divorced
    //  Married title
    requirements: [],
    // TODO: Spouse disappears forever
    effects: []
  };
  sexpert: Fallout2PlayerReputation = {
    // TODO: Have sex ten times with any sex-specific characters
    requirements: [],
    // TODO: Improved sexual dialogue
    effects: []
  };
  slaver: Fallout2PlayerReputation = {
    // TODO: Join the Slaver's Guild
    requirements: [],
    // TODO: Ability to make slave runs
    //  Certain quests become unavailable
    //  Enemies with certain factions
    effects: []
  };
  // TODO: It can be lost by sleeping one time with any sex-specific characters.
  virginOfTheWastesIconCut: Fallout2PlayerReputation = {
    // TODO: The Chosen One begins the game with this reputation
    requirements: [],
    effects: []
  };
}

export class Fallout2CharacterReaction {
  // TODO: After initial calculation only changed via scripted changes
  /** Perserved between dialogues */
  baseReaction = undefined;

  // TODO: Dialogue options adjust the level by two by default.
  /** Not perserved between dialogues */
  staticReaction = 0;

  constructor(playerCharisma, npcCharisma) {
    this.baseReaction = this.calculateBaseReaction(playerCharisma, npcCharisma);
  }

  calculateBaseReaction = (playerCharisma, npcCharisma) => (playerCharisma - npcCharisma) * 5;

  getLevel = () => {
    const effectiveReactionValue = this.getEffectiveReactionValue();
    if (effectiveReactionValue >= -25 && effectiveReactionValue <= 25) {
      return GeneralReputationLevels.NEUTRAL;
    } else if (effectiveReactionValue > 0) {
      return GeneralReputationLevels.POSITIVE;
    } else if (effectiveReactionValue < 0) {
      return GeneralReputationLevels.NEGATIVE;
    }
  };

  getEffectiveReactionValue = () => noLessThan(noMoreThan(this.baseReaction + this.staticReaction, 100), -100);

  // TODO: Modifiers should be pulled from Effects array not from here
  //  But then again, how to invert reputation for evil characters?
  calculateInitialStaticReaction = (isNpcEvil: boolean,
                                    generalReputatation: Fallout2Reputation,
                                    perks: { count(name: string), has(name: string) },
                                    traits: { has(name: string) },
                                    titles: { count(name: string), has(name: string) },
                                    townReputation: number,
                                    gender: { player: Sex, npc: Sex }) => {
    // TODO: Evaluate unused: Direct karma, Cult of Personality perk, Karma Beacon perk
    const townReputationModifier = Math.floor(townReputation / 2);
    // TODO: Slaver: -50, -25, 0 or +25 (mostly 0)
    //  Slaver title's effect and its sign rather depends on what the character thinks of slavers.
    const slaverModifier = 0;
    const sexAppealModifier = traits.has("sexAppeal") ? (gender.player === gender.npc ? -20 : 20) : 0;
    const presenceModifier = perks.count("presence") * 10;
    const reputationTitleModifier = (generalReputatation.specificValue() * 5 + titles.has("berserker") ? -20 : 0 + titles.has("champion") ? 20 : 0) * (isNpcEvil ? -1 : 1);
    const childKillerModifier = titles.has("childKiller") ? -30 : 0;

    return townReputation + sexAppealModifier + presenceModifier + reputationTitleModifier + childKillerModifier + slaverModifier;
  };
}
