// 1st step of combat
/**
 * simulates the difficulty of landing a telling blow on targets that are evasive or otherwise highly mobile,
 * or wear armor that may completely deflect glancing hits without even needing to absorb the damage
 */
// TODO: at the end of each combat round, your AC increases by each unused Action Point.
const calculateArmorClass = (baseArmorClass, chanceToHit) => (chanceToHit - baseArmorClass);
// TODO: "Adjusted to hit%" means the character's base skill level modified by distance, weapon, aimed body part (if applicable), cover, etc. - <0, 100>
//  aimed body part can change chance to hit to 0%
const adjustChanceToHit = (target) => {

};
/**
 * as a legacy of tabletop role-playing games, there is always a chance (one in twenty) to miss. Even more notably, outside of an aimed shot there is a minimum 5% chance to hit
 */
const calculateIsHit = (armorClassCheck, baseArmorClass, chanceToHit) => {
  if (chanceToHit === 0) {
    // Targeted shot with no chance of hitting
    // TODO: Denote with special value?
    return false;
  }

  if (armorClassCheck <= 5) {
    // Always hit
    return true;
  }

  if (armorClassCheck >= 95) {
    // Always miss
    return false;
  }

  return armorClassCheck < calculateArmorClass(baseArmorClass, chanceToHit);
};
// 2nd step of combat
/**
 * simulates the effect of how tough armor can immediately stop a bullet cold, no matter how many successful shots are
 * fired (like a real-life tank).
 */
const calculateDamageFromDamageThreshold = (incomingDamage, damageThreshold) => Math.max(0, incomingDamage, damageThreshold);
// 3rd step of combat
/**
 * simulates the effect of how armor can help diffuse the energy of a bullet and reduce its
 * lethality (like real-life Kevlar armor).
 *
 * DR is capped at 90%, and any damage that goes past DT has a minimum of 1.
 */
const calculateDamageResistance = (baseDamageResistance, calculateDamageFromDamageThreshold) => Math.max(1, calculateDamageFromDamageThreshold * (100 - Math.min(baseDamageResistance, 90)) / 100);

const rollDice = (sides) => Math.floor(Math.random() * sides) + 1;
const rollD100 = () => rollDice(100);

const combat = () => {
  // FIXME
  const targetBaseArmorClass = 0;
  // FIXME
  const target = 0;

  const isHit = calculateIsHit(rollD100(), targetBaseArmorClass, adjustChanceToHit(target));
  if (!isHit) {
    return;
  }

  // FIXME
  const incomingDamage = 0;
  // FIXME
  const targetDamageThreshold = 0;
  const calculatedDamageFromDamageThreshold = calculateDamageFromDamageThreshold(incomingDamage, targetDamageThreshold);

  if (calculatedDamageFromDamageThreshold === 0) {
    return;
  }

  // FIXME
  const damageResistance = 0;
  return calculateDamageResistance(damageResistance, calculatedDamageFromDamageThreshold);
};
