/* tslint:disable:max-line-length */
import {Injectable} from "@angular/core";
import {Script, Scripts} from "./scripts.model";
import {AttributeKey, GameDifficulty} from "../state/model";

@Injectable({
  providedIn: "root",
})
export class ScriptsProvider {
  private scripts: Scripts = {};

  constructor() {

    // utilities
    this.scripts.noLessThan = ({value, compareTo}) => (value < compareTo ? compareTo : value);
    this.scripts.noLessThanZero = ({value, scriptsLibrary}) => scriptsLibrary.execute("noLessThan", {
      value,
      compareTo: 0
    });
    this.scripts.noLessThanOne = ({value, scriptsLibrary}) => scriptsLibrary.execute("noLessThan", {
      value,
      compareTo: 1
    });
    this.scripts.getDifficulty = ({game}) => game.difficulty;
    // end utilities

    // attributes
    this.scripts.isNewAttributeValueValid = ({attributeValue}) => (1 <= attributeValue) && (attributeValue <= 10);
    this.scripts.attributeFreePointsAtStart = () => 5;
    this.scripts.attributeBaseValue = () => 5;
    // end attributes

    // skills
    this.scripts.skillGetValue = ({skill, scriptsLibrary}) => {
      const skillValue = Math.floor(scriptsLibrary.execute("getAdjustedSkillValue", {skill}));
      const maxSkillPoints = scriptsLibrary.execute("maxSkillPoints");
      return scriptsLibrary.execute("noLessThanZero", {value: skillValue < maxSkillPoints ? skillValue : maxSkillPoints});
    };
    this.scripts.maxSkillPoints = () => 300;
    this.scripts.getAdjustedSkillValue = ({skill}) => skill.tag ? skill.value + 20 : skill.value;
    this.scripts.canAddSkillPoint = ({skillValue, scriptsLibrary}) => skillValue < scriptsLibrary.execute("maxSkillPoints");
    this.scripts.gameDifficultySkillModifier = ({scriptsLibrary}) => {
      const difficulty = scriptsLibrary.execute("getDifficulty");

      switch (difficulty) {
        case GameDifficulty.EASY:
          return 20;
        case GameDifficulty.HARD:
          return -10;
        default:
          return 0;
      }
    };
    this.scripts.adjustByDifficulty = ({argument, scriptsLibrary}) => argument + scriptsLibrary.execute("gameDifficultySkillModifier");

    this.scripts.skillsBaseValueSmallGuns = ({player}) => 5 + 4 * player.attributes[AttributeKey.AGILITY];
    this.scripts.skillsBaseValueBigGuns = ({player}) => 2 * player.attributes[AttributeKey.AGILITY];
    this.scripts.skillsBaseValueEnergyWeapons = ({player}) => 2 * player.attributes[AttributeKey.AGILITY];
    this.scripts.skillsBaseValueUnarmed = ({player}) => 30 + 2 * (player.attributes[AttributeKey.AGILITY] + player.attributes[AttributeKey.STRENGTH]);
    this.scripts.skillsBaseValueMeleeWeapons = ({player}) => 20 + 2 * (player.attributes[AttributeKey.AGILITY] + player.attributes[AttributeKey.STRENGTH]);
    this.scripts.skillsBaseValueThrowing = ({player}) => 4 * player.attributes[AttributeKey.AGILITY];
    this.scripts.skillsBaseValueFirstAid = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (2 * (player.attributes[AttributeKey.PERCEPTION] + player.attributes[AttributeKey.INTELLIGENCE]))});
    this.scripts.skillsBaseValueDoctor = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (5 + (player.attributes[AttributeKey.PERCEPTION] + player.attributes[AttributeKey.INTELLIGENCE]))});
    this.scripts.skillsBaseValueSneak = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (5 + 3 * player.attributes[AttributeKey.AGILITY])});
    this.scripts.skillsBaseValueLockpick = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (10 + (player.attributes[AttributeKey.PERCEPTION] + player.attributes[AttributeKey.AGILITY]))});
    this.scripts.skillsBaseValueSteal = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (3 * player.attributes[AttributeKey.AGILITY])});
    this.scripts.skillsBaseValueTraps = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (10 + (player.attributes[AttributeKey.PERCEPTION] + player.attributes[AttributeKey.AGILITY]))});
    this.scripts.skillsBaseValueScience = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (4 * player.attributes[AttributeKey.INTELLIGENCE])});
    this.scripts.skillsBaseValueRepair = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (3 * player.attributes[AttributeKey.INTELLIGENCE])});
    this.scripts.skillsBaseValueSpeech = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (5 * player.attributes[AttributeKey.CHARISMA])});
    this.scripts.skillsBaseValueBarter = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (4 * player.attributes[AttributeKey.CHARISMA])});
    this.scripts.skillsBaseValueGambling = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (5 * player.attributes[AttributeKey.LUCK])});
    this.scripts.skillsBaseValueOutdoorsman = ({player, scriptsLibrary}) => scriptsLibrary.execute("adjustByDifficulty", {argument: (2 * (player.attributes[AttributeKey.ENDURANCE] + player.attributes[AttributeKey.INTELLIGENCE]))});

    this.scripts.skillPointsPerLevel = ({player}) => Math.floor(5 + 2 * player.attributes[AttributeKey.INTELLIGENCE]);
    this.scripts.costOfSkillUpgrade = ({skillValue}) => {
      if (skillValue <= 100) {
        return 1;
      } else if (skillValue <= 125) {
        return 2;
      } else if (skillValue <= 150) {
        return 3;
      } else if (skillValue <= 175) {
        return 4;
      } else if (skillValue <= 200) {
        return 5;
      } else if (skillValue <= 300) {
        return 6;
      } else {
        return 100;
      }
    };
    // end skills

    // tag skills
    this.scripts.maxTagSkills = ({player}) => player.perks.tag ? 4 : 3;
    // end tag skills

    // misc
    this.scripts.healthPointsBaseValue = ({player}) => 15 + (2 * player.attributes[AttributeKey.ENDURANCE]) + player.attributes[AttributeKey.STRENGTH];
    this.scripts.healthPointsPerLevel = ({player}) => 2 + Math.floor(player.attributes[AttributeKey.ENDURANCE] / 2);
    this.scripts.armorClass = ({player}) => player.attributes[AttributeKey.AGILITY];
    this.scripts.actionPoints = ({player}) => 5 + Math.floor(player.attributes[AttributeKey.AGILITY] / 2);
    this.scripts.carryWeight = ({player}) => 25. + 25 * player.attributes[AttributeKey.STRENGTH];
    // Example: If weapon has base damage of 3->5, we add result (e.g. 5) like so: 3->(5+5)
    this.scripts.maxMeleeDamageModifier = ({player, scriptsLibrary}) => {
      const value = player.attributes[AttributeKey.STRENGTH] - 5;
      return scriptsLibrary.execute("noLessThanOne", {value});
    };
    this.scripts.damageResistance = () => 0;
    this.scripts.poisonResistance = ({player}) => 5 * player.attributes[AttributeKey.ENDURANCE];
    this.scripts.radiationResistance = ({player}) => 2 * player.attributes[AttributeKey.ENDURANCE];
    this.scripts.sequence = ({player}) => 2 * player.attributes[AttributeKey.PERCEPTION];
    this.scripts.healingRate = ({player, scriptsLibrary}) => scriptsLibrary.execute("noLessThanOne", {value: Math.floor(player.attributes[AttributeKey.ENDURANCE] / 3)});
    this.scripts.criticalChance = ({player}) => player.attributes[AttributeKey.LUCK];
    // end misc

    // traits
    this.scripts.maxTraitsAtStart = () => 2;

    // end traits

    // TODO: Fixme
    this.scripts.sexGod = () => false;

    this.scripts.objSexRating = ({player, scriptsLibrary}) => {
      const attributes = player.attributes;
      const perks = player.perks;

      const charisma = attributes[AttributeKey.CHARISMA];
      const endurance = attributes[AttributeKey.ENDURANCE];
      const agility = attributes[AttributeKey.AGILITY];
      const strength = attributes[AttributeKey.STRENGTH];
      const kamaSutraMaster = perks.kamaSutraMaster.rank > 0;
      const sexAppeal = perks.sexAppeal.rank > 0;
      const sexGod = scriptsLibrary.execute("sexGod");
      const perkModifier = (kamaSutraMaster ? 2 : 0) + (sexAppeal ? 1 : 0) + (sexGod ? 2 : 0);
      const result = (((charisma * 50) + (endurance * 25) + (agility * 13) + (strength * 12)) / 100) + perkModifier;

      if (result >= 7) {
        return "sexRatingGreat";
      } else if (result >= 5) {
        return "sexRatingGood";
      } else if (result >= 3) {
        return "sexRatingNormal";
      } else if (result >= 2) {
        return "sexRatingBad";
      } else {
        return "sexRatingHorrible";
      }
    };

    // player
    this.scripts.calculateExperienceNeededForNextLevel = ({player}) => {
      const level = player.level;
      const experience = player.experience;
      const expNeeded = (25 * ((3 * level) + 2) * (level)) - experience;
      return expNeeded < 0 ? 0 : expNeeded;
    };

    // this.scripts["weaponFinalDamage"] = ({player}) => {
    //     // FIXME
    //     // character.Equipment.GetCurrentWeapon().BaseDamage;
    //     var weaponBaseDamage = 1;

    //     // FIXME
    //     // var governingSkill = character.Equipment.GetCurrentWeapon().SkillType;
    //     var governingSkillValue = 5;

    //     // character.Attributes.GetAttribute(governingSkill).Value;

    //     return weaponBaseDamage * (((50 + governingSkillValue) * 0.5) / 100);
    // }

    //             scripts.Add(new Script(game.Player, "weaponFinalDamage", (scriptsLibrary, baseObject, argument) =>
    //             {
    //             }));

    //             scripts.Add(new Script(game.Player, "baseSkillValue", (scriptsLibrary, player, argument) =>
    //             {
    //                 var defaultArgumentValue = 5;
    //                 var statValue = argument ?? defaultArgumentValue;
    //                 var luckValue = ((ICharacter)player).Attributes.GetById(Attribute.Luck).Value;
    //                 return 2 + (2 * (int)statValue) + (luckValue / 2);
    //             }));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.ActionPoints, (scriptsLibrary, attributes, argument) => 65 + (((IAttributes)attributes).GetById(Attribute.Agility).Value * 3)));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.CarryWeight, (scriptsLibrary, attributes, argument) => 150 + (((IAttributes)attributes).GetById(Attribute.Strength).Value * 10)));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.CompanionNerve, (scriptsLibrary, attributes, argument) => (int)(0.05 * ((IAttributes)attributes).GetById(Attribute.Charisma).Value)));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.CriticalChance, (scriptsLibrary, attributes, argument) => (int)(0.01 * ((IAttributes)attributes).GetById(Attribute.Luck).Value)));

    //             scripts.Add(new Script(game.Player, DeprivedAttributeLabel.HitPoints, (scriptsLibrary, player, argument) => (((ICharacter)player).Level.Level * 5) + 95 + (20 * ((ICharacter)player).Attributes.GetById(Attribute.Endurance).Value)));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.MeleeDamage, (scriptsLibrary, attributes, argument) => (int)(0.5 * ((IAttributes)attributes).GetById(Attribute.Strength).Value)));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.PoisonResistance, (scriptsLibrary, attributes, argument) => (5 * ((IAttributes)attributes).GetById(Attribute.Endurance).Value) - 5));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.RadiationResistance, (scriptsLibrary, attributes, argument) => (2 * ((IAttributes)attributes).GetById(Attribute.Endurance).Value) - 2));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.ReloadSpeed, (scriptsLibrary, attributes, argument) =>
    //             {
    //                 float value = ((IAttributes)attributes).GetById(Attribute.Agility).Value;
    //                 return (int)(value > 5 ? 0.1 * (value - 5) : 0);
    //             }));

    //             scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.SkillRate, (scriptsLibrary, attributes, argument) => (int)(10 + (0.5 * attributes.GetById(Attribute.Intelligence).Value))));

    //             scripts.Add(new Script(game.Player.Skills, DeprivedAttributeLabel.UnarmedDamage, (scriptsLibrary, skills, argument) => (int)(0.5 + (skills.GetById(Skill.Unarmed).Value / 20))));

    //             scripts.Add(new Script(game.Player.Perks, "addPerk", (scriptsLibrary, perks, perkName) =>
    //             {
    //                 perks.Add(perkName);
    //                 return null;
    //             }));

    //             scripts.Add(new Script(game.Player, "player", (scriptsLibrary, player, argument) =>
    //             {
    //                 return scriptsLibrary.GetById("log").Execute(player);
    //             }));

    //             scripts.Add(new Script(null, "log", (_, __, argument) =>
    //             {
    //                 string result = argument is IList ? (string)String.Join(" ", argument) : (string)argument.ToString();
    //                 loggerService.Log(result);

    //                 return null;
    //             }));

    //             scripts.Add(new Script(game.Player, "calculateExperienceNeededForNextLevel", (scriptsLibrary, player, argument) =>
    //             {
    //                 var level = ((ICharacter)player).Level.Level;
    //                 return 25 * ((3 * level) + 2) * (level - 1);
    //             }));


    //             // TODO: As effects?
    //             scripts.Add(new Script(game.Player.Radiation, "handleRadiationLevel", (scriptsLibrary, player, radiationLevel) =>
    //             {
    //                 if (radiationLevel < 150)
    //                 {
    //                     // very nauseous
    //                     // No Effect
    //                 }
    //                 else if (radiationLevel < 300)
    //                 {
    //                     // slightly fatigued
    //                     // Minor Radiation Poisoning
    //                     // -1 STR
    //                 }
    //                 else if (radiationLevel < 450)
    //                 {
    //                     // vomiting does not stop
    //                     // Advanced Radiation Poisoning
    //                     // -1 STR
    //                     // -1 AGI
    //                 }
    //                 else if (radiationLevel < 600)
    //                 {
    //                     // hair is falling out
    //                     // Critical Radiation Poisoning
    //                     // -2 STR
    //                     // -1 END
    //                     // -2 AGI
    //                     // -5% HP

    //                 }
    //                 else if (radiationLevel < 1000)
    //                 {
    //                     // skin is falling off
    //                     // Deadly Radiation Poisoning
    //                     // -4 STR
    //                     // -3 PER
    //                     // -3 END
    //                     // -3 CHA
    //                     // -1 INT
    //                     // -5 AGI
    //                     // -15% HP
    //                 }
    //                 else
    //                 {
    //                     // intense agony, Fatal Radiation Poisoning
    //                     // -6 STR
    //                     // -5 PER
    //                     // -5 END
    //                     // -5 CHA
    //                     // -3 INT
    //                     // -6 AGI
    //                     // 24h to drop below 1000 or death
    //                 }

    //                 return null;
    //             }));
  }

  execute(key: string, globalVariables: object): { script: Script, globalVariables: object } {
    const newLocal = this.scripts[key];
    if (!newLocal) {
      console.error(`Script not found. ${key}`);
      return {script: () => (null), globalVariables: {}};
    }
    return {script: newLocal, globalVariables};
  }
}
