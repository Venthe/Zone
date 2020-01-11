import * as _ from "lodash";

export type ChallengeRecurrence = "nonrecurring" | number;

export type PreRequisiteCheck = ({game: Game, player: Player}) => boolean;

type KillEntry = any;
type ChallengeEntry = any;
const ChallengeGrantedEvent = (any) => undefined;
const ExperienceGrantedEvent = (any) => undefined;

function countKillOfType(kills: KillEntry[], killType: GeneralWeaponType) {
  return _(kills).filter((kill: KillEntry) => kill.weaponUsed.weaponType === killType).size();
}

function countKillOfEntityType(kills: KillEntry[], enemyType: EnemyType) {
  return _(kills).filter((kill: KillEntry) => kill.entityKilled === enemyType).size();
}

function countChallenge(challenges: ChallengeEntry[], challenge) {
  return challenges[challenge.uuid] === undefined ? 0 : challenges[challenge.uuid].rank;
}

function isGrantedChallenge(challenges: ChallengeEntry[], challenge) {
  return countChallenge(challenges, challenge) >= 1;
}

export const Challenges = {
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
  }
};

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

export enum EnemyType {
  Abomination = "Abomination",
  MutatedAnimal = "MutatedAnimal",
  Robot = "Robot",
  MutatedInsect = "MutatedInsect",
  SuperMutant = "SuperMutant"
}
