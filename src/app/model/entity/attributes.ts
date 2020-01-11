import {between} from "../../utils/utils";

const isNewAttributeValueValid = (min, max) => (attributeValue) => (min <= attributeValue) && (attributeValue <= max);

export interface Attributes {
  /**  Raw physical strength. */
  strength;
  /** The ability to see, hear and taste and notice unusual things. */
  perception;
  /** Stamina and physical toughness. */
  endurance;
  /** A combination of appearance and charm. */
  charisma;
  /** Knowledge, wisdom and the ability to think quickly. */
  intelligence;
  /** Coordination and the ability to move well. */
  agility;
  /** Fate, Karma.  */
  luck;
}

export class Fallout2Attributes implements Attributes {
  static readonly attributePointsToDistributeAtStart = 5;

  // TODO: Thrown weapon range modifier
  // TODO: Usable weapons
  strength = new Fallout2Attribute();
  // TODO: Dialogue options
  // TODO: Distance from enemies in random encounters
  // TODO: Ranged combat distance modifiers
  // TODO: Sequence
  perception = new Fallout2Attribute();
  endurance = new Fallout2Attribute();
  // TODO: NPC reactions
  // TODO: Prices
  charisma = new Fallout2Attribute();
  // TODO: Dialogue options
  intelligence = new Fallout2Attribute();
  agility = new Fallout2Attribute();
  // TODO: Chances with the virtual dice of the game
  luck = new Fallout2Attribute();
}

// TODO: Maybe effects could modify attributes past 10?
class Fallout2Attribute {
  static readonly maxAttributeValue = 10;
  static readonly attributeBoundary = between(1, Fallout2Attribute.maxAttributeValue);
  static readonly startingValue = 5;

  constructor(private value = Fallout2Attribute.startingValue) {
  }

  getValue() {
    return Fallout2Attribute.attributeBoundary(this.value);
  }

  increase() {
    if (!(this.value < Fallout2Attribute.maxAttributeValue)) {
      return;
    }

    this.value++;
  }
}
