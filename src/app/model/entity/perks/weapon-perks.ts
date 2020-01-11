import {Effect} from "../utility/effects";

export interface Fallout2WeaponPerk {
  effects: Effect[]
}

export class Fallout2WeaponPerks {
  weaponAccurate: Fallout2WeaponPerk = {
    // TODO: +20% hit chance at all ranges
    effects: []
  };
  weaponKnockback: Fallout2WeaponPerk = {
    // TODO: Knocks back the target (1 hex per 5 points of damage)
    effects: []
  };
  weaponLongRange: Fallout2WeaponPerk = {
    // TODO: Hit chance reduced for targets farther than 4* (Perception - 2) hexes (200% increase in effective range)
    //   this perk doubles the effective range of the weapon
    effects: []
  };
  weaponPenetrate: Fallout2WeaponPerk = {
    // TODO: Target's Damage Threshold reduced by 80% (divided by 5).
    effects: []
  };
  weaponFastReload: Fallout2WeaponPerk = {
    // TODO: Reduces reloading cost to 1 AP
    effects: []
  };
  weaponFlameboy: Fallout2WeaponPerk = {
    // TODO: Lowers threshold for burning death animation to 15 points of damage
    effects: []
  };
  weaponNightSight: Fallout2WeaponPerk = {
    // TODO: Removes penalties for illumination
    effects: []
  };
  weaponScopeRange: Fallout2WeaponPerk = {
    // TODO: Hit chance reduced for targets farther than 5*(Perception - 2) hexes (250% effective range)
    effects: []
  };
}
