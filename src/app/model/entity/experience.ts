import {noLessThanZero} from "../../utils/utils";

export class Fallout2Experience {
  level = 1;
  currentExperience = 0;
  static readonly maxLevel = 99;

  calculateExperienceNeededForNextLevel = () => noLessThanZero(this.currentExperience - ((this.level * (this.level - 1) / 2) * 1000));
}
