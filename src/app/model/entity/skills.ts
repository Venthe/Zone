import {between} from "../../utils/utils";
import {GameDifficulty} from "../game";
import {Attributes} from "./attributes";

class Fallout2Skill {
  static readonly maxSkillPoints = 300;

  private pointValue: number = 0;

  isTagged: boolean;

  constructor(private readonly skillCalculationFunction: (isTagged?: boolean) => number) {

  }

  // TODO: Present as %
  getSkill() {
    const bindSkillValue: (value: number) => number = between(0, Fallout2Skill.maxSkillPoints);
    const adjustValueByTagged = (value, isTagged) => value + (isTagged ? 20 : 0);
    return bindSkillValue(adjustValueByTagged(this.pointValue + this.skillCalculationFunction(this.isTagged), this.isTagged));
  }

  raisePoints(distributableSkillPoints: number): number {
    if (!Fallout2Skill.canAddSkillPoint(this.pointValue, distributableSkillPoints)) {
      return 0;
    }

    const pointsToAdd = this.isTagged ? 2 : 1;
    this.pointValue += pointsToAdd;

    return Fallout2Skill.costOfSkillUpgrade(this.pointValue);
  }

  static readonly canAddSkillPoint = (currentSkillValue, distributableSkillPoints) =>
    currentSkillValue < Fallout2Skill.maxSkillPoints && distributableSkillPoints >= Fallout2Skill.costOfSkillUpgrade(currentSkillValue);
  static readonly costOfSkillUpgrade = (skillValue) => {
    if (skillValue <= 100) {
      return 1;
    } else if (skillValue <= 125) {
      return 2;
    } else if (skillValue <= 150) {
      return 3;
    } else if (skillValue <= 175) {
      return 4;
    } else if (skillValue <= 200) {
      return 5;
    } else if (skillValue <= 300) {
      return 6;
    } else {
      throw new Error(`Skill should never exceed ${Fallout2Skill.maxSkillPoints}`);
    }
  };
}

// TODO: Add math.floor to every single one
export class Fallout2Skills {
  constructor(private readonly attributes: Attributes) {

  }

  // TODO: Include perk "Tag!" that allows for 4 tagged skills
  static readonly maxTagSkills = 3;
  readonly skillPointsPerLevel = 5 + 2 * this.attributes.intelligence;

  readonly adjustByDifficulty = (difficulty, value: number, isTagged: boolean) => {
    if (isTagged) {
      return value;
    }

    switch (difficulty) {
      case GameDifficulty.Easy:
        return value + 20;
      case GameDifficulty.Hard:
        return value - 10;
      default:
        return value;
    }
  };

  // combat
  readonly smallGuns = (difficulty) => new Fallout2Skill(() => 5 + (4 * this.attributes.agility));
  readonly bigGuns = (difficulty) => new Fallout2Skill(() => 2 * this.attributes.agility);
  readonly energyWeapons = (difficulty) => new Fallout2Skill(() => 2 * this.attributes.agility);
  readonly unarmed = (difficulty) => new Fallout2Skill(() => 30 + 2 * (this.attributes.strength + this.attributes.agility));
  readonly meleeWeapons = (difficulty) => new Fallout2Skill(() => 30 + 2 * (this.attributes.strength + this.attributes.agility));
  readonly throwing = (difficulty) => new Fallout2Skill(() => 4 * this.attributes.agility);

  // active
  readonly firstAid = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 2 * (this.attributes.perception + this.attributes.intelligence), isTagged));
  readonly doctor = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 5 + (this.attributes.perception + this.attributes.intelligence), isTagged));
  readonly sneak = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 5 + 3 * this.attributes.agility, isTagged));
  readonly lockpick = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 10 + (this.attributes.perception + this.attributes.agility), isTagged));
  readonly steal = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 3 * this.attributes.agility, isTagged));
  readonly traps = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 10 + (this.attributes.perception + this.attributes.agility), isTagged));
  readonly science = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 4 * this.attributes.intelligence, isTagged));
  readonly repair = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 3 * this.attributes.intelligence, isTagged));

  // passive
  readonly speech = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 5 * this.attributes.charisma, isTagged));
  readonly barter = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 4 * this.attributes.charisma, isTagged));
  readonly gambling = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 5 * this.attributes.luck, isTagged));
  readonly outdoorsman = (difficulty) => new Fallout2Skill((isTagged: boolean) => this.adjustByDifficulty(difficulty, 2 * (this.attributes.endurance + this.attributes.intelligence), isTagged));
}
