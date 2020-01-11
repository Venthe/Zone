import {noLessThanOne, noLessThanZero} from "../../utils/utils";
import {Attributes} from "./attributes";

const adjustValue = value => Math.floor(noLessThanZero(value));

export class Fallout2DerivedAttributes {
  constructor(private readonly attributes: Attributes) {
  }

  /** The amount of actions your character can take during a combat turn. */
  actionPoints = adjustValue(5 + this.attributes.agility / 2);

  /** How good your character is at avoiding being hit in combat. */
  armorClass = adjustValue(this.attributes.agility);

  // TODO: Convert to KG
  /** The maximum amount of equipment your character can carry, in pounds (LBS). */
  carryWeight = adjustValue(25 + 25 * this.attributes.strength);

  // TODO: Convert to %
  /** Chance to cause a Critical Hit. */
  criticalChance = adjustValue(this.attributes.luck);

  /** Any damage taken is reduced by this amount. */
  damageResistance = adjustValue(0);

  /** How many Hit Points you heal at the end of each day. */
  healingRate = adjustValue(noLessThanOne(this.attributes.endurance / 3));

  /** How much damage your character can take before dying.*/
  hitPoints = adjustValue(15 + (2 * this.attributes.endurance) + this.attributes.strength);

  /**
   * Amount of bonus damage in hand-to-hand combat.
   *
   * Example: If weapon has base damage of 3->5, we add result (e.g. 5) like so: 3->(5+5)
   */
  bonusToMaxMeleeDamage = adjustValue(noLessThanOne(this.attributes.strength - 5));

  /** The number of followers your character can have. */
  partyLimit = adjustValue(this.attributes.charisma / 2);

  // TODO: Convert to %
  /** Reduces any poison damage by this amount. */
  poisonResistance = adjustValue(5 * this.attributes.endurance);

  // TODO: Convert to %
  /** Amount of radiation your character is exposed to is reduced by this amount. */
  radiationResistance = adjustValue(2 * this.attributes.endurance);

  /** Determines how soon in a combat turn your character can react. */
  sequence = adjustValue(2 * this.attributes.perception);
}
