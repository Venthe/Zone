import {Effect} from "./utility/effects";

// TODO: If the rad count gets high enough, however, SPECIAL stats begin to drop, and if any of these drop to zero due to poisoning, the character dies. Also, should the character survive to maximum irradiation (1000 rads) (as in their stats do not reach zero), the character has 24 hours to use enough RadAway to get themselves below 1000 rads or they will die.
export class Fallout2Radiation {
  currentValue = 0;

  // TODO: If currentValue > 0, Noop effect add "Radiated"
  calculateEffects(): { level: number, effect: Effect[] } {
    if (this.currentValue === 0) {
      return {
        level: 0,
        effect: []
      };
    } else if (this.currentValue < 150) {
      return {
        level: 1,
        effect: []
      };
    } else if (this.currentValue < 300) {
      return {
        level: 2,
        // TODO: -1 STR
        effect: []
      };
    } else if (this.currentValue < 450) {
      return {
        level: 3,
        // TODO: -1 STR
        // TODO: -1 AGI
        effect: []
      };
    } else if (this.currentValue < 600) {
      return {
        level: 4,
        // TODO: -2 STR
        // TODO: -1 END
        // TODO: -2 AGI
        // TODO: -5% HP
        effect: []
      };
    } else if (this.currentValue < 1000) {
      return {
        level: 5,
        // TODO: -4 STR
        // TODO: -3 PER
        // TODO: -3 END
        // TODO: -3 CHA
        // TODO: -1 INT
        // TODO: -5 AGI
        // TODO: -15% HP
        effect: []
      };
    } else if (this.currentValue >= 1000) {
      return {
        level: 6,
        // TODO: -6 STR
        // TODO: -5 PER
        // TODO: -5 END
        // TODO: -5 CHA
        // TODO: -3 INT
        // TODO: -6 AGI
        // TODO: 24h to drop below 1000 or death
        effect: []
      };
    }
  };
}
