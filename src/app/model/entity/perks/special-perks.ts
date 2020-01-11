import {Attributes} from "../attributes";
import {Fallout2Skills} from "../skills";
import {Effect} from "../utility/effects";

export interface Fallout2SpecialPerk {
  effects: Effect[]
}

// There should be no requirements here? Only via questlines and actions?
export class Fallout2SpecialPerks {
  alcoholLoweredHitPoints: Fallout2SpecialPerk = {
    // TODO: Consuming Alcohol-Z 100 times
    // TODO: LUCK === 2,
    // TODO: -2 HP
    effects: []
  };
  alcoholLoweredHitPointsIi: Fallout2SpecialPerk = {
    // TODO: Consuming Alcohol-Z 100 times
    // TODO: LUCK === 1,
    // TODO: -4 HP
    effects: []
  };
  alcoholRaisedHitPoints: Fallout2SpecialPerk = {
    // TODO: Consuming Alcohol-Z 100 times
    // TODO: LUCK === 9,
    // TODO: +2 HP
    effects: []
  };
  alcoholRaisedHitPointsIi: Fallout2SpecialPerk = {
    // TODO: Consuming Alcohol-Z 100 times
    // TODO: LUCK === 10,
    // TODO: +4 HP
    effects: []
  };
  autodocRaisedHitPoints: Fallout2SpecialPerk = {
    // TODO: INTELLIGENCE=== 3,
    // TODO: +2 HP
    effects: []
  };
  autodocRaisedHitPointsIi: Fallout2SpecialPerk = {
    // TODO: INTELLIGENCE< 3,
    // TODO: +4 HP
    effects: []
  };
  autodocLoweredHitPoints: Fallout2SpecialPerk = {
    // TODO: INTELLIGENCE=== 3
    //  attributes.luck === 2,
    // TODO: -2 HP
    effects: []
  };
  autodocLoweredHitPointsIi: Fallout2SpecialPerk = {
    // TODO: INTELLIGENCE< 3
    //  attributes.luck === 1,
    // TODO: -4 HP
    effects: []
  };
  dermalImpactArmor: Fallout2SpecialPerk = {
    // TODO: +5% damage resistance against normal and explosion damage
    effects: []
  };
  // TODO: Replaces dermal Impact Armor
  // TODO: Requires dermal Impact Armor
  dermalImpactAssaultEnhancement: Fallout2SpecialPerk = {
    // TODO: +10% damage resistance against normal and explosion damage; -1 CH
    effects: []
  };
  expertExcrementExpeditor: Fallout2SpecialPerk = {
    // TODO: +5% to your Speech skill
    //  Reputation loss in Broken Hills
    effects: []
  };
  geckoSkinning: Fallout2SpecialPerk = {
    // TODO: Allows skinning geckos for sale
    effects: []
  };
  phoenixArmorImplants: Fallout2SpecialPerk = {
    // TODO: 5% to Damage Resistance against plasma, laser and fire
    effects: []
  };
  // TODO: Replaces Phoenix Armor Implants
  // TODO: Requires Phoenix Armor Implants
  phoenixAssaultEnhancement: Fallout2SpecialPerk = {
    // TODO: 10% to Damage Resistance against fire, laser and plasma
    //  CH -1
    effects: []
  };
  vaultCityTraining: Fallout2SpecialPerk = {
    // TODO: +5% First Aid, +5% Doctor
    effects: []
  };
  vaultCityInoculations: Fallout2SpecialPerk = {
    // TODO: +10% Poison Resistance
    //  +10% Radiation Resistance
    effects: []
  };
}
