import {Attributes} from "../attributes";
import {Fallout2Reputation} from "../reputation";
import {Fallout2Skills} from "../skills";
import {Effect} from "../utility/effects";

export interface Fallout2RegularPerk {
  ranks: number;
  requirements: (parameters: { level: number, attributes: Attributes, skills: Fallout2Skills, karma: Fallout2Reputation }) => boolean;
  effects: Effect[]
}

// TODO: Multirank perks are given at intervals, see levels 3, 6 and 9
// TODO: Maybe include Fallout Tactics race limitations?
export class Fallout2Perks {
  /** How many levels must pass before your character gains another perk. */
  static readonly perkRate = 3;

  actionBoy: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 12 && attributes.agility >= 5,
    // TODO: Additional Action Points to spend every combat turn
    // TODO: How many action points are given?
    effects: []
  };
  adrenalineRush: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.strength < 10,
    // TODO: Gain +1 Strength when you drop below 50% of your max HP
    effects: []
  };
  awareness: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.perception >= 5,
    // TODO: Show HP, equipped weapon and its ammunition count of any characters, creatures and robots you examine
    effects: []
  };
  betterCriticals: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 9 && attributes.perception >= 6 && attributes.luck > 6 && attributes.agility >= 4,
    // TODO: 20% bonus on the critical hit table. Can trigger an instant kill effect
    effects: []
  };
  bonusHtHAttacks: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 15 && attributes.agility >= 6,
    // TODO: Unarmed and melee attacks cost one less AP
    effects: []
  };
  bonusHtHDamage: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.agility >= 6 && attributes.strength >= 6,
    // TODO: You gain +2 points of damage with hand-to-hand and melee attacks
    effects: []
  };
  bonusMove: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 6 && attributes.agility >= 5,
    // TODO: For each level of Bonus Move, you get 2 free APs each turn that can only be used for movement.
    effects: []
  };
  bonusRangedDamage: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 6 && attributes.agility >= 6 && attributes.luck >= 6,
    // TODO: +2 damage with ranged weapons
    effects: []
  };
  bonusRateOfFire: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 15 && attributes.perception >= 6 && attributes.intelligence >= 6 && attributes.agility >= 7,
    // TODO: 1 less AP needed for ranged attacks
    effects: []
  };
  cautiousNature: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.perception >= 6,
    // TODO: Effective +3 Perception for determining placement in random encounters
    effects: []
  };
  comprehension: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.intelligence >= 6,
    // TODO: Gain 50% more skill points when reading books
    effects: []
  };
  cultOfPersonality: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.charisma >= 10,
    // TODO: With this perk, your reputation is always positive to people, regardless of their Karma.
    effects: []
  };
  demolitionExpert: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 9 && attributes.agility >= 4 && skills.traps({} as any).getSkill() >= 75,
    // TODO: Explosives do more damage and always detonate on time. 10 points of damage
    effects: []
  };
  dodger: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 9 && attributes.agility >= 4,
    // TODO: Every level adds +5 to your Armor Class
    effects: []
  };
  earlierSequence: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.perception >= 6,
    // TODO: +2 Sequence
    effects: []
  };
  educated: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 6 && attributes.intelligence >= 6,
    // TODO: +2 skill points at each level up
    effects: []
  };
  empathy: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.perception >= 7 && attributes.intelligence >= 5,
    // TODO: You will see the reaction level of the person you are talking to, when involved in an in-depth conversation.
    //  With this perk, in dialogue, options are displayed in colors to signify what reactions will be given.
    //     Red options cause negative reactions.
    //     Blue options cause positive reactions.
    //     Green options cause neutral (or no) reactions.
    effects: []
  };
  explorer: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level}) => level >= 9,
    // TODO: Higher chance of finding special places and people in random encounters
    effects: []
  };
  fasterHealing: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.endurance >= 6,
    // TODO: +2 Healing Rate per level
    effects: []
  };
  fortuneFinder: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.luck >= 8,
    // TODO: Additional money in random encounters
    effects: []
  };
  gainStrength: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.strength < 10,
    // TODO: +1 to strength
    effects: []
  };
  gainPerception: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.perception < 10,
    // TODO: +1 to perception
    effects: []
  };
  gainEndurance: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.endurance < 10,
    // TODO: +1 to endurance
    effects: []
  };
  gainCharisma: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.charisma < 10,
    // TODO: +1 to charisma
    effects: []
  };
  gainIntelligence: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.intelligence < 10,
    // TODO: +1 to intelligence
    effects: []
  };
  gainAgility: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.agility < 10,
    // TODO: +1 to agility
    effects: []
  };
  gainLuck: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.luck < 10,
    // TODO: +1 to luck
    effects: []
  };
  gambler: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 6 && skills.gambling({} as any).getSkill() >= 50,
    // TODO: +20% to Gambling
    effects: []
  };
  ghost: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 6 && skills.sneak({} as any).getSkill() >= 60,
    // TODO: +20% Sneak during darkness conditions
    effects: []
  };
  harmless: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills, karma}) => level >= 6 && skills.steal({} as any).getSkill() >= 50 && karma.generalReputation >= 50,
    // TODO: +20% steal
    effects: []
  };
  healer: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes, skills}) => level >= 3 && attributes.perception >= 7 && attributes.agility >= 6 && skills.firstAid({} as any).getSkill() >= 40,
    // TODO: Each level will add 4-10 more hit points healed when using the First Aid or Doctor skills.
    effects: []
  };
  heaveHo: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.strength < 9,
    // TODO: Effective +2 ST per rank when determining thrown weapon range (Up to 10)
    //  Range is calculated as (3x Strength). Since grenades have a maximum range of 15, this perk is pretty useless with a Strength above 3.
    effects: []
  };
  hereAndNow: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level}) => level >= 3,
    // TODO: Gain one additional experience level
    effects: []
  };
  htHEvade: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 12 && skills.unarmed({} as any).getSkill() >= 75,
    // TODO: AC increased by 2 for each unused AP, plus unarmed skill /12
    //  While it states that both item slots must be empty, that is not entirely accurate. It really requires not holding a gun or melee weapon (anything that is visible in the character's hands). This perk will work if wielding unarmed weapons (such as brass knuckles, boxing gloves, power fist), throwables (grenades, rocks), or any non-weapon item.
    effects: []
  };
  kamaSutraMaster: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.endurance >= 5 && attributes.agility >= 5,
    // TODO: You can have sex and unlock all dialogue option with any sex-specific characters regardless of your stats
    //  Add +2 points in the porn audition at the Golden Globes
    effects: []
  };
  karmaBeacon: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 9 && attributes.charisma >= 6,
    // TODO: Karma is doubled for the purposes of dialogue and reactions
    effects: []
  };
  lifegiver: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 12 && attributes.endurance >= 4,
    // TODO: +4 HP for each rank of this perk per level
    effects: []
  };
  lightStep: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 9 && attributes.agility >= 5 && attributes.luck >= 5,
    // TODO: 50% less chance of setting off a trap
    effects: []
  };
  livingAnatomy: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 12 && skills.doctor({} as any).getSkill() >= 60,
    // TODO: +10% Doctor
    //  +5 damage per attack against organics
    effects: []
  };
  magneticPersonality: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.charisma < 10,
    // TODO: With this perk, the player character can recruit one additional companion, up to a maximum of five
    effects: []
  };
  masterThief: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 12 && skills.steal({} as any).getSkill() >= 50 && skills.lockpick({} as any).getSkill() >= 50,
    // TODO: +15% to Steal and Lockpick
    effects: []
  };
  masterTrader: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 9 && attributes.charisma >= 6 && skills.barter({} as any).getSkill() >= 60,
    // TODO: In Fallout 2, due to a change in the Barter formula, this perk subtracts 25 points from a barter modifier, which is then multiplied by the original price and the Barter skill modifier.
    //  25% discount when purchasing items from a store or trader
    //  By default, the modifier starts at 100%, but Reaction modifiers can add 25 points, 0 points, or subtract 15 points at the same time, making the discount appear to vary from 20% (when there is a +25 point "negative reaction" modifier), to 25% (with "neutral reaction" modifier (0 points), up to 40% (with a -15 point "positive reaction" modifier).[
    effects: []
  };
  medic: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 12 && (skills.firstAid({} as any).getSkill() >= 40 || skills.doctor({} as any).getSkill() >= 40),
    // TODO: +10% First Aid and Doctor
    effects: []
  };
  moreCriticals: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 6 && attributes.luck >= 6,
    // TODO: +5% critical chance
    effects: []
  };
  mrFixit: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 12 && (skills.repair({} as any).getSkill() >= 40 || skills.science({} as any).getSkill() >= 40),
    // TODO: +10% to Science and Repair
    effects: []
  };
  mutate: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level}) => level >= 9,
    // TODO: Change one trait for another
    effects: []
  };
  mysteriousStranger: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 9 && attributes.luck >= 4,
    // TODO: Mysterious Stranger will appear occasionally in hostile random encounters to help you
    //  Chance of appearance %=30+(2×Luck)
    effects: []
  };
  negotiator: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 6 && skills.barter({} as any).getSkill() >= 50 && skills.speech({} as any).getSkill() >= 50,
    // TODO: +10% to Speech and Barter
    effects: []
  };
  nightVision: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.perception >= 6,
    // TODO: Reduces the overall darkness level by 20%
    effects: []
  };
  packRat: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level}) => level >= 6,
    // TODO: Carry weight is increased by 50 lbs.
    effects: []
  };
  pathfinder: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes, skills}) => level >= 6 && attributes.endurance >= 6 && skills.outdoorsman({} as any).getSkill() >= 40,
    // TODO: World map travel time reduced by 25% per rank
    //  drain on the Highwayman's battery is reduced by 25%
    effects: []
  };
  pickpocket: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 15 && attributes.agility >= 8 && skills.steal({} as any).getSkill() >= 80,
    // TODO: Ignore size and facing modifiers when stealing.
    effects: []
  };
  presence: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.charisma >= 6,
    // TODO: The initial reaction of another person is improved by 10% for each level of this perk.
    //  Since the reaction is rated on a -100 to 100 scale, "10%" rather means +10 points to the value.
    effects: []
  };
  pyromaniac: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 9 && skills.bigGuns({} as any).getSkill() >= 75,
    // TODO: the most violent fire-based death animation will always be used
    //  +5 damage with fire-based weapons
    effects: []
  };
  quickPockets: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.agility >= 5,
    // TODO: The cost to access Inventory during combat is only 2 AP with this Perk.
    effects: []
  };
  quickRecovery: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.agility >= 5,
    // TODO: It takes only 1 AP to stand up.
    //  normal cost to stand back up is a massive 4 AP
    effects: []
  };
  radResistance: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 6 && attributes.endurance >= 6 && attributes.intelligence >= 4,
    // TODO: +15% Radiation Resistance
    effects: []
  };
  ranger: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 6 && attributes.perception >= 6,
    // TODO: +15% Outdoorsman
    effects: []
  };
  salesman: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 6 && skills.barter({} as any).getSkill() >= 50,
    // TODO: +20% Barter
    effects: []
  };
  scout: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.perception >= 7,
    // TODO: This will increase the amount of the map you can see while exploring and make finding the special random encounters a little easier.
    effects: []
  };
  scrounger: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 9 && attributes.luck >= 8,
    // TODO: double the amount of ammunition found in random encounters.
    effects: []
  };
  sharpshooter: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 9 && attributes.perception >= 7 && attributes.intelligence >= 6,
    // TODO: +2 to Perception for the purposes of determining range modifiers.
    effects: []
  };
  silentDeath: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 18 && attributes.agility >= 10 && skills.sneak({} as any).getSkill() >= 80 && skills.unarmed({} as any).getSkill() >= 80,
    // TODO: While Sneaking, if you hit a critter in the back, you will cause double damage using a HtH attack.
    effects: []
  };
  silentRunning: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 6 && attributes.agility >= 6 && skills.sneak({} as any).getSkill() >= 50,
    // TODO: Sneak and run at the same time
    effects: []
  };
  slayer: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 24 && attributes.agility >= 8 && attributes.strength >= 8 && skills.unarmed({} as any).getSkill() >= 80,
    // TODO: All hand-to-hand attacks cause critical hits.
    effects: []
  };
  smoothTalker: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.intelligence >= 4,
    // TODO: With each level of this perk, you increase your Intelligence by +1 only for purposes of dialogue.
    effects: []
  };
  snakeater: Fallout2RegularPerk = {
    ranks: 2,
    requirements: ({level, attributes}) => level >= 6 && attributes.endurance >= 3,
    // TODO: With each level of this perk, you will gain +25% poison resistance.
    effects: []
  };
  sniper: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 24 && attributes.perception >= 8 && attributes.agility >= 8 && skills.smallGuns({} as any).getSkill() >= 80,
    // TODO: Increase chance to score a critical hit
    //  It adds another Luck roll of (10*Luck), hence having 10 LK converts every hit to critical and indirectly causes target's armor DR to be ignored regardless of player weapon. The perk synergises extremely well with weapons capable of burst fire, as every shot in one burst is upgraded. Taken in combination with Better Criticals' 20% chance for insta-kill, it makes burst mode extremely deadly.
    effects: []
  };
  speaker: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, skills}) => level >= 9 && skills.speech({} as any).getSkill() >= 50,
    // TODO: +20% to Speech (patched)
    effects: []
  };
  stonewall: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 3 && attributes.strength >= 6,
    // TODO: You are much less likely to be knocked down in combat.
    effects: []
  };
  strongBack: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.strength >= 6 && attributes.endurance >= 6,
    // TODO: carry an additional 50 lbs. of equipment.
    effects: []
  };
  survivalist: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes, skills}) => level >= 3 && attributes.endurance >= 6 && attributes.intelligence >= 6 && skills.outdoorsman({} as any).getSkill() >= 40,
    // TODO: +25% bonus to Outdoorsman.
    effects: []
  };
  swiftLearner: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level}) => level >= 3,
    // TODO: 5% bonus to Experience Points earned
    effects: []
  };
  tag: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level}) => level >= 12,
    // TODO: Permits a fourth tag skill, doubling the rate at which it increases, but does not add any points in itself.
    //  this perk also doubles all skill points previously spent on the selected skill (but not any skill points added by perks).
    effects: []
  };
  thief: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level}) => level >= 3,
    // TODO: One-time bonus:
    //  +10% Sneak
    //  +10% Lockpick
    //  +10% Steal
    //  +10% Traps
    effects: []
  };
  toughness: Fallout2RegularPerk = {
    ranks: 3,
    requirements: ({level, attributes}) => level >= 3 && attributes.endurance >= 6 && attributes.luck >= 6,
    // TODO: +10% Damage Resistance
    effects: []
  };
  weaponHandling: Fallout2RegularPerk = {
    ranks: 1,
    requirements: ({level, attributes}) => level >= 12 && attributes.agility >= 5 && attributes.strength < 7,
    // TODO: Effective +3 Strength for weapon minimum Strength checks
    effects: []
  };
}
