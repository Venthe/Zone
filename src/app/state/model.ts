import {Action} from "@ngrx/store";
import {ChallengeGrantedEvent, ExperienceGrantedEvent} from "./app.actions";
import * as _ from "lodash";
import {ChallengeEntry, KillEntry} from "./app.reducer";

export type ChallengeRecurrence = "nonrecurring" | number;

export type PreRequisiteCheck = ({game: Game, player: Player}) => boolean;

export interface Challenge {
  name: string;
  uuid?: string;
  challengeRecurrence?: ChallengeRecurrence;
  onObtained?: () => Action[];
  canBeGranted?: PreRequisiteCheck;
  isVisible?: PreRequisiteCheck;
}

function countKillOfType(kills: KillEntry[], killType: GeneralWeaponType) {
  return _(kills).filter((kill: KillEntry) => kill.weaponUsed.weaponType === killType).size();
}

function countKillOfEntityType(kills: KillEntry[], enemyType: EnemyType) {
  return _(kills).filter((kill: KillEntry) => kill.entityKilled === enemyType).size();
}

function countChallenge(challenges: ChallengeEntry[], challenge: Challenge) {
  return challenges[challenge.uuid] === undefined ? 0 : challenges[challenge.uuid].rank;
}

function isGrantedChallenge(challenges: ChallengeEntry[], challenge: Challenge) {
  return countChallenge(challenges, challenge) >= 1;
}

export const Challenges: { [key: string]: Challenge } = {
  aFistfulOfHollars: {
    uuid: "d7ca046a-094a-4938-897b-e7b9a90e9ca2",
    name: "A Fistful of Hollars",
    challengeRecurrence: "nonrecurring",
    onObtained: () => [ExperienceGrantedEvent({experience: 50}), ChallengeGrantedEvent({challenge: Challenges.aFistfulOfHollars})],
    canBeGranted: ({player}) => countKillOfType(player.kills, GeneralWeaponType.Unarmed) >= 42
      && !isGrantedChallenge(player.challenges, Challenges.aFistfulOfHollars),
    isVisible: ({player}) => countKillOfType(player.kills, GeneralWeaponType.Unarmed) >= 1
  },
  abominable: {
    name: "Abominable",
    uuid: "4564157a-9910-4b78-87d6-8e52b4016342",
    challengeRecurrence: 3,
    onObtained: () => [ExperienceGrantedEvent({experience: 50}), ChallengeGrantedEvent({challenge: Challenges.abominable})],
    isVisible: ({player}) => countKillOfEntityType(player.kills, EnemyType.Abomination) >= 1,
    canBeGranted: ({player}) => countKillOfEntityType(player.kills, EnemyType.Abomination) > 0
      && countKillOfEntityType(player.kills, EnemyType.Abomination) % 50 === 0
      && countChallenge(player.challenges, Challenges.abominable) < Challenges.abominable.challengeRecurrence
  },
  animalControl: {name: "Animal Control"},
  bugStomper: {name: "Bug Stomper"},
  demiseOfTheMachines: {name: "Demise of the Machines"},
  energetic: {name: "Energetic"},
  forAFewHollarsMore: {name: "For a Few Hollars More"},
  iCanKillYouWithOneHand: {name: "I Can Kill You With One Hand"},
  justPointAndClick: {name: "Just Point and Click"},
  kaboom: {name: "Kaboom"},
  kaboomBoomPow: {name: "Kaboom-boom-pow"},
  moreEnergetic: {name: "More Energetic"},
  notSoUpClose: {name: "Not So Up Close"},
  nukeItFromOrbit: {name: "Nuke it From Orbit"},
  shootEmUp: {name: "Shoot Em Up"},
  shootEmUpAgain: {name: "Shoot Em Up Again"},
  superMutantMassacre: {name: "Super Mutant Massacre"},
  theRifleman: {name: "The Rifleman"},
  thisIsHacking: {name: "This is Hacking"},
  upClose: {name: "Up Close"},
  upCloser: {name: "Up Closer"},
  andBoyAreMyArmsTired: {name: "...And Boy are My Arms Tired"},
  aLittleCritical: {name: "A Little Critical"},
  aMatterOfHeart: {name: "A Matter of Heart"},
  aMatterOfPerception: {name: "A Matter of Perception"},
  aimingIsOptional: {name: "Aiming is Optional"},
  beamWeaponMeUp: {name: "Beam (Weapon) Me Up"},
  blasterMaster: {name: "Blaster Master"},
  click: {name: "Click"},
  conditionCritical: {name: "Condition Critical"},
  criticalReaction: {name: "Critical Reaction"},
  destroySomethingNotSoBeautiful: {name: "Destroy Something Not So Beautiful"},
  fullOfStars: {name: "Full of Stars"},
  goForTheEyes: {name: "Go For the Eyes"},
  gottaHandGrenadeItToYou: {name: "Gotta Hand Grenade It to You"},
  gutChecker: {name: "Gut Checker"},
  iAmNotLeftHanded: {name: "I Am Not Left Handed"},
  iCanDoItOneHanded: {name: "I Can Do It One Handed"},
  iVeGotShotgun: {name: "I've Got Shotgun"},
  knockedUp: {name: "Knocked Up"},
  leadDealer: {name: "Lead Dealer"},
  letSGetCritical: {name: "Let's Get Critical"},
  lethalWeapons: {name: "Lethal Weapons"},
  limberJack: {name: "Limber Jack"},
  loveTheBomb: {name: "Love the Bomb"},
  newVegasSamurai: {name: "New Vegas Samurai"},
  oldTymeBrawler: {name: "Old-Tyme Brawler"},
  setLasersForFun: {name: "Set Lasers for Fun"},
  theBigSqueezy: {name: "The Big Squeezy"},
  twoHandsAreBetterThanOne: {name: "Two Hands are Better than One"},
  wereYouUsingThat: {name: "Were You Using That?"},
  youLlBlindSomebody: {name: "You'll Blind Somebody"},
  andKnowDisintegrations: {name: "...And Know Disintegrations"},
  andNotADropToDrink: {name: "...And Not a drop to Drink"},
  orAreYouJustHappyToSeeMe: {name: "...Or Are You Just Happy to See Me?"},
  allThingsInModderNation: {name: "All Things in Modder Nation"},
  apocalypseAinTGotNothinOnMe: {name: "Apocalypse Ain't Got Nothin' On Me"},
  artfulPocketer: {name: "Artful Pocketer"},
  atALossForWords: {name: "At a Loss for Words"},
  knowWhenToHoldEm: {name: "Know When to Hold 'Em"},
  crafty: {name: "Crafty"},
  craftyVeteran: {name: "Crafty Veteran"},
  dayTripper: {name: "Day Tripper"},
  desertSurvivalist: {name: "Desert Survivalist"},
  devourerOfNations: {name: "Devourer of Nations"},
  dineAndDash: {name: "Dine and Dash"},
  disarmingPersonality: {name: "Disarming Personality"},
  doubleDown: {name: "Double Down"},
  drWastelandMD: {name: "Dr. Wasteland, M.D."},
  fastTimes: {name: "Fast Times"},
  findVault3: {name: "Find Vault 3"},
  findVault11: {name: "Find Vault 11"},
  findVault19: {name: "Find Vault 19"},
  findVault22: {name: "Find Vault 22"},
  findVault34: {name: "Find Vault 34"},
  fixinThings: {name: "Fixin' Things"},
  freeRadical: {name: "Free Radical"},
  h4XSupr3M3: {name: "H4x Supr3m3"},
  heMovesInMysteriousWays: {name: "He Moves in Mysterious Ways"},
  healthyGlow: {name: "Healthy Glow"},
  iCanStopAnyTimeIWant: {name: "I Can Stop Any Time I Want"},
  iDismemberYou: {name: "I Dismember You"},
  littleWheel: {name: "Little Wheel"},
  lordDeath: {name: "Lord Death"},
  lordDeathOfMurderMountain: {name: "Lord Death of Murder Mountain"},
  lowTechHacking: {name: "Low Tech Hacking"},
  masterOfTheMojave: {name: "Master of the Mojave"},
  maybeThatSALie: {name: "Maybe That's a Lie"},
  missFortunateSonOrDaughter: {name: "Miss Fortunate Son (or Daughter)"},
  oneArmedBandit: {name: "One Armed Bandit"},
  questinMark: {name: "Questin' Mark"},
  radical: {name: "Radical"},
  sirTalksALot: {name: "Sir Talks-a-lot"},
  stimPlyAmazing: {name: "Stim-ply Amazing"},
  stimpaddict: {name: "Stimpaddict"},
  toughGuy: {name: "Tough Guy"},
  upToTheChallenge: {name: "Up to the Challenge"},
  walkerOfTheMojave: {name: "Walker of the Mojave"},
  youRunBarterTown: {name: "You Run Barter Town"},
  allForOne: {name: "All For One"},
  assembleYourCrew: {name: "Assemble Your Crew"},
  authorityIssues: {name: "Authority Issues"},
  bigWinner: {name: "Big Winner"},
  cashOut: {name: "Cash Out"},
  deanSSecretStash: {name: "Dean's Secret Stash"},
  deadManSHand: {name: "Dead Man's Hand"},
  ghostEaterHarvesters: {name: "Ghost Eater - Harvesters"},
  ghostEaterSeekers: {name: "Ghost Eater - Seekers"},
  ghostEaterTrappers: {name: "Ghost Eater - Trappers"},
  havingABall: {name: "Having a Ball"},
  historySSake: {name: "History's Sake"},
  kissOfDeath: {name: "Kiss of Death"},
  looseEnds: {name: "Loose Ends"},
  safetyDepositBox: {name: "Safety Deposit Box"},
  sierraMadreSouvenirAficionado: {name: "Sierra Madre Souvenir Aficionado"},
  theWholeSadStory: {name: "The Whole Sad Story"},
  thingsToCome: {name: "Things to Come!"},
  inAForeignLand: {name: "In a Foreign Land"},
  mayMyHandForgetItsSkill: {name: "May my Hand Forget its Skill"},
  oDaughterOfBabylon: {name: "O Daughter of Babylon"},
  restoreOurFortunes: {name: "Restore Our Fortunes"},
  survivalistSBounty: {name: "Survivalist's Bounty"},
  whenWeRememberedZion: {name: "When We Remembered Zion"},
  yaoGuaiHunter: {name: "Yao Guai Hunter"},
  automaton: {name: "Automaton"},
  madScientist: {name: "Mad Scientist"},
  evilGenius: {name: "Evil Genius"},
  makeUpYourMind: {name: "Make up Your Mind"},
  makingFriends: {name: "Making Friends"},
  cardiacArrest: {name: "Cardiac Arrest!"},
  cazaDeathDealer: {name: "Caza-Death Dealer"},
  dogRunI: {name: "Dog Run I"},
  dogRunII: {name: "Dog Run II"},
  dogRunIII: {name: "Dog Run III"},
  mtSpace: {name: "MT Space"},
  kleinDestine: {name: "Klein Destine"},
  mobiusStrip: {name: "Mobius Strip"},
  outerSpace: {name: "Outer Space"},
  outsmarted: {name: "Outsmarted"},
  spinalTapped: {name: "Spinal-Tapped"},
  VrTheChampionsI: {name: "VR the Champions I"},
  VrTheChampionsII: {name: "VR the Champions II"},
  VrTheChampionsIII: {name: "VR the Champions III"},
  condemnedToRepeatIt: {name: "Condemned to Repeat It"},
  edEcated: {name: "ED-Ecated"},
  hometownHero: {name: "Hometown Hero"},
  rocketSRedGlare: {name: "Rocket's Red Glare"},
  warheadHunter: {name: "Warhead Hunter"},
  endsOfTheEarth: {name: "Ends of the Earth"},
  mostLikelyTo: {name: "Most Likely To..."},
  nostalgia: {name: "Nostalgia"},
  feelLikeAKidAgain: {name: "Feel Like a Kid Again"},
  theCourierSMile: {name: "The Courier's Mile"},
  ulyssesOdyssey: {name: "Ulysses' Odyssey"},
  againstAllTyrants: {name: "Against All Tyrants"},
  armedForBear: {name: "Armed For Bear"},
  aSlaveObeys: {name: "A Slave Obeys"},
  benefitOrAHazard: {name: "Benefit Or a Hazard"},
  crackerjackTiming: {name: "Crackerjack Timing"},
  curiosAndRelics: {name: "Curios and Relics"},
  deathclawProHunter: {name: "Deathclaw Pro Hunter"},
  dyinAinTMuchOfALiving: {name: "Dyin' Ain't Much of a Living"},
  evenAGodKingCanBleed: {name: "Even a God-King Can Bleed"},
  historicalPropriety: {name: "Historical Propriety"},
  manMachineInterface: {name: "Man-Machine Interface"},
  masterOfTheArsenal: {name: "Master of the Arsenal"},
  neNeNeNe: {name: "Ne Ne Ne Ne..."},
  nyahSee: {name: "Nyah! See?"},
  overkill: {name: "Overkill"},
  sicSemperTyrannis: {name: "Sic Semper Tyrannis"},
  talkAboutOwned: {name: "Talk About Owned"},
  theSameCouldBeSaidOfAllReligiousWeapons: {name: "The Same Could Be Said of All Religious Weapons"},
  vault13SRevenge: {name: "Vault 13's Revenge"},
  whiteLineNightmare: {name: "White Line Nightmare"},
  youDonTBelongInThisWorld: {name: "You Don't Belong In This World!"}
};

export interface Achievement {
  name: string;
  description: string;
}

export const Achievements: { [key: string]: Achievement } = {
  newKid: {
    name: "New Kid",
    description: "Reach level 10"
  },
  upAndComer: {
    name: "Up and Comer",
    description: "Reach level 20"
  },
  theBoss: {
    name: "The Boss",
    description: "Reach level 30"
  },
  olBuddyOlPal: {
    name: "Ol' Buddy Ol' Pal",
    description: "Recruit any companion"
  },
  theWholeGangSHere: {
    name: "The Whole Gang's Here",
    description: "Recruit all of the companions"
  },
  crafty: {
    name: "Crafty",
    description: "Craft 20 items"
  },
  modMachine: {
    name: "Mod Machine",
    description: "Install 20 weapon mods"
  },
  walkerOfTheMojave: {
    name: "Walker of the Mojave",
    description: "Discover 50 locations"
  },
  masterOfTheMojave: {
    name: "Master of the Mojave",
    description: "Discover 125 locations"
  },
  globeTrotter: {
    name: "Globe Trotter",
    description: "Find all the snow globes"
  },
  youRunBarterTown: {
    name: "You Run Barter Town",
    description: "Sell 10,000 caps worth of goods"
  },
  blastMastery: {
    name: "Blast Mastery",
    description: "Deal 10,000 damage with energy weapons"
  },
  loveTheBomb: {
    name: "Love the Bomb",
    description: "Deal 10,000 damage with explosives"
  },
  leadDealer: {
    name: "Lead Dealer",
    description: "Deal 10,000 damage with guns"
  },
  noTumblerFumbler: {
    name: "No Tumbler Fumbler",
    description: "Pick 25 locks"
  },
  stimPlyAmazing: {
    name: "Stim-ply Amazing",
    description: "Heal 10,000 damage with stimpaks"
  },
  newVegasSamurai: {
    name: "New Vegas Samurai",
    description: "Deal 10,000 damage with melee weapons"
  },
  juryRigger: {
    name: "Jury Rigger",
    description: "Repair 30 items"
  },
  hackTheMojave: {
    name: "Hack the Mojave",
    description: "Hack 25 terminals"
  },
  artfulPocketer: {
    name: "Artful Pocketer",
    description: "Pick 50 pockets"
  },
  outstandingOrator: {
    name: "Outstanding Orator",
    description: "Pass 50 Speech checks"
  },
  desertSurvivalist: {
    name: "Desert Survivalist",
    description: "Heal 10,000 damage with Food"
  },
  oldTymeBrawler: {
    name: "Old-Tyme Brawler",
    description: "Deal 10,000 damage with unarmed weapons"
  },
  knowWhenToFoldThem: {
    name: "Know When to Fold Them",
    description: "Win 3 games of Caravan"
  },
  oneArmedBandit: {
    name: "One Armed Bandit",
    description: "Play 10 spins of slots"
  },
  littleWheel: {
    name: "Little Wheel",
    description: "Play 10 spins of Roulette"
  },
  doubleDown: {
    name: "Double Down",
    description: "Play 10 hands of Blackjack"
  },
  caravanMaster: {
    name: "Caravan Master",
    description: "Win 30 games of Caravan"
  },
  theCourierWhoBrokeTheBank: {
    name: "The Courier Who Broke the Bank",
    description: "Get banned from all the casinos on the strip"
  },
  hardcore: {
    name: "Hardcore",
    description: "Beat the game from start to finish with Hardcore mode enabled"
  },
  ainTThatAKickInTheHead: {
    name: "Ain't That a Kick in the Head",
    description: "Complete 'Ain't That a Kick in the Head'"
  },
  theyWentThatAWay: {
    name: "They Went That-a-Way",
    description: "Complete 'They Went That-a-Way'"
  },
  ringADingDing: {
    name: "Ring-a-Ding-Ding!",
    description: "Complete 'Ring-a-Ding-Ding!'"
  },
  theHouseAlwaysWins: {
    name: "The House Always Wins",
    description: "Complete 'The House Always Wins'"
  },
  forTheRepublicPart2: {
    name: "For the Republic, Part 2",
    description: "Complete 'For the Republic, Part 2'"
  },
  renderUntoCaesar: {
    name: "Render Unto Caesar",
    description: "Complete 'Render Unto Caesar'"
  },
  wildCard: {
    name: "Wild Card",
    description: "Complete 'Wild Card'"
  },
  allOrNothing: {
    name: "All or Nothing",
    description: "Complete 'All or Nothing'"
  },
  veniVidiVici: {
    name: "Veni, Vidi, Vici",
    description: "Complete 'Veni, Vidi, Vici'"
  },
  eureka: {
    name: "Eureka!",
    description: "Complete 'Eureka!'"
  },
  noGodsNoMasters: {
    name: "No Gods, No Masters",
    description: "Complete 'No Gods, No Masters'"
  },
  comeFlyWithMe: {
    name: "Come Fly With Me",
    description: "Complete 'Come Fly With Me'"
  },
  talentPool: {
    name: "Talent Pool",
    description: "Complete 'Talent Pool'"
  },
  returnToSender: {
    name: "Return to Sender",
    description: "Complete 'Return to Sender'"
  },
  arizonaKiller: {
    name: "Arizona Killer",
    description: "Complete 'Arizona Killer'"
  },
  youLlKnowItWhenItHappens: {
    name: "You'll Know It When It Happens",
    description: "Complete 'You'll Know It When It Happens'"
  },
  gIBlues: {
    name: "G.I. Blues",
    description: "Complete 'G.I. Blues'"
  },
  thatLuckyOldSun: {
    name: "That Lucky Old Sun",
    description: "Complete 'That Lucky Old Sun'"
  },
  volare: {
    name: "Volare!",
    description: "Complete 'Volare!'"
  },
  theLegendOfTheStar: {
    name: "The Legend of the Star",
    description: "Complete 'A Valuable Lesson'"
  },
  assembleYourCrew: {
    name: "Assemble Your Crew",
    description: "Recruit Dean Domino, Christine and Dog"
  },
  cashOut: {
    name: "Cash Out",
    description: "Confront Father Elijah in the Sierra Madre vault"
  },
  havingABall: {
    name: "Having a Ball",
    description: "Complete the Sierra Madre Gala Event"
  },
  safetyDepositBox: {
    name: "Safety Deposit Box",
    description: "Trap Father Elijah in the Sierra Madre's vault"
  },
  sierraMadreSouvenirAficionado: {
    name: "Sierra Madre Souvenir Aficionado",
    description: "Collect 500 Sierra Madre chips"
  },
  inAForeignLand: {
    name: "In a Foreign Land",
    description: "Scouted the Zion Valley for signs of the White Legs"
  },
  mayMyHandForgetItsSkill: {
    name: "May my Hand Forget its Skill",
    description: "Evacuated Zion"
  },
  oDaughterOfBabylon: {
    name: "O Daughter of Babylon",
    description: "Crushed the White Legs"
  },
  restoreOurFortunes: {
    name: "Restore Our Fortunes",
    description: "Resupplied Daniel and the Sorrows"
  },
  whenWeRememberedZion: {
    name: "When We Remembered Zion",
    description: "Arrived at Zion"
  },
  cardiacArrest: {
    name: "Cardiac Arrest!",
    description: "Recovered X-13 cardiac regulator sneaky suit"
  },
  makeUpYourMind: {
    name: "Make up Your Mind",
    description: "Made up your Mind... about your brain"
  },
  makingFriends: {
    name: "Making Friends",
    description: "Reactivated all of the Sink's robotic assistants"
  },
  outsmarted: {
    name: "Outsmarted",
    description: "Completed Old World Blues."
  },
  spinalTapped: {
    name: "Spinal-Tapped",
    description: "Recovered X-8 vertebrae-pulse-de-sensitizer frequency"
  },
  edEcated: {
    name: "ED-Ecated",
    description: "Found all of ED-E's upgrades in the Divide"
  },
  condemnedToRepeatIt: {
    name: "Condemned to Repeat It",
    description: "Decided the fate of all the Divide Dwellers"
  },
  hometownHero: {
    name: "Hometown Hero",
    description: "Completed Lonesome Road"
  },
  rocketSRedGlare: {
    name: "Rocket's Red Glare",
    description: "Acquired all upgrades for the Divide's signature weapon"
  },
  warheadHunter: {
    name: "Warhead Hunter",
    description: "Detonated all the warheads in the Divide"
  },
  curiosAndRelics: {
    name: "Curios and Relics",
    description: "Caused 10,000 damage with unique Mojave Wasteland weapons"
  },
  masterOfTheArsenal: {
    name: "Master of the Arsenal",
    description: "Caused 10,000 damage with Gun Runners' Arsenal Weapons"
  },
  upToTheChallenge: {
    name: "Up to the Challenge",
    description: "Completed any three Gun Runners' Arsenal one star (★) Challenges"
  },
  combatVeteran: {
    name: "Combat Veteran",
    description: "Completed any three Gun Runners' Arsenal two star (★★) Challenges"
  },
  prosOnly: {
    name: "Pros Only",
    description: "Completed any three Gun Runners' Arsenal three star (★★★) Challenges"
  }
};

export interface Skill {
  name: string;
}

export interface Skills {
  [key: string]: Skill;
}

export const enum AttributeKey {
  STRENGTH = "strength",
  PERCEPTION = "perception",
  ENDURANCE = "endurance",
  CHARISMA = "charisma",
  INTELLIGENCE = "intelligence",
  AGILITY = "agility",
  LUCK = "luck"
}

export enum WeaponCarryType {
  OneHanded = "OneHanded",
  ShoulderMounted = "ShoulderMounted",
  TwoHanded = "TwoHanded"
}

export enum WeaponDamageType {
  Concussive = "Concussive",
  Energy = "Energy",
  Ballistic = "Ballistic",
  Explosive = "Explosive"
}

export enum GeneralWeaponType {
  Pistol = "Pistol",
  Rifle = "Rifle",
  SubMachineGun = "SubMachineGun",
  Shotgun = "Shotgun",
  HeavyWeapon = "HeavyWeapon",
  Projectile = "Projectile",
  Thrown = "Thrown",
  Placed = "Placed",
  Bladed = "Bladed",
  Blunt = "Blunt",
  Unarmed = "Unarmed",
  Other = "Other"
}

export interface Weapon {
  damageType: WeaponDamageType;
  carryType: WeaponCarryType;
  weaponType: GeneralWeaponType;
}

export enum DamageType {
  Damage = "Damage",
  CriticalHit = "CriticalHit",
  Cripple = "Cripple",
  KnockDown = "KnockDown"
}

export enum Extremity {
  Torso = "Torso",
  Head = "Head",
  LeftArm = "LeftArm",
  RightArm = "RightArm",
  LeftLeg = "LeftLeg",
  RightLeg = "RightLeg"
}

export interface DamageEntry {
  amount: number;
  damageType: DamageType;
  extremity: Extremity;
}

export enum GameDifficulty {
  EASY = "easy",
  HARD = "hard"
}

export enum EnemyType {
  Abomination = "Abomination",
  MutatedAnimal = "MutatedAnimal",
  Robot = "Robot",
  MutatedInsect = "MutatedInsect",
  SuperMutant = "SuperMutant"
}
