import {Effect} from "../utility/effects";

export interface Fallout2ArmorPerk {
  effects: Effect[]
}

export class Fallout2ArmorPerks {
  combatArmor: Fallout2ArmorPerk = {
    // TODO: Radiation Resistance is increased by +20%
    effects: []
  };
  poweredArmor: Fallout2ArmorPerk = {
    // TODO: Strength is increased by +3
    //  Radiation Resistance by +30%
    effects: []
  };
  armorAdvancedI: Fallout2ArmorPerk = {
    // TODO: Strength increased by +4
    //  Radiation Resistance +60%
    effects: []
  };
  armorAdvancedIi: Fallout2ArmorPerk = {
    // TODO: Strength increased by +4
    //  Radiation Resistance +75%
    effects: []
  };
  armorCharisma: Fallout2ArmorPerk = {
    // TODO: Charisma increased by +2
    effects: []
  };
}
