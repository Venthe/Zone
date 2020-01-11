/* tslint:disable:max-line-length */

class Scripts {
  private scripts: { [key: string]: (any) => any } = {};

  constructor() {
    // TODO: Fixme
    this.scripts["sexGod"] = () => true;

    this.scripts["objSexRating"] = ({player, scriptsLibrary}) => {
      const attributes = player.attributes;
      const perks = player.perks;

      const charisma = attributes["Charisma"];
      const endurance = attributes["Endurance"];
      const agility = attributes["Agility"];
      const strength = attributes["Strength"];
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
    this.scripts["calculateExperienceNeededForNextLevel"] = ({player}) => {
      const level = player.level;
      const experience = player.experience;
      const expNeeded = (25 * ((3 * level) + 2) * (level)) - experience;
      return expNeeded < 0 ? 0 : expNeeded;
    };

    this.scripts["weaponFinalDamage"] = ({player}) => {
      // FIXME
      // character.Equipment.GetCurrentWeapon().BaseDamage;
      var weaponBaseDamage = 1;

      // FIXME
      // var governingSkill = character.Equipment.GetCurrentWeapon().SkillType;
      var governingSkillValue = 5;

      // character.Attributes.GetAttribute(governingSkill).Value;

      return weaponBaseDamage * (((50 + governingSkillValue) * 0.5) / 100);
    };

    // FIXME
    this.scripts["calculateExperienceNeededForNextLevel"] = ({scriptsLibrary, player, argument}) => {
      var level = player.Level.Level;
      return 25 * ((3 * level) + 2) * (level - 1);
    };


    // TODO: As effects?
    this.scripts["handleRadiationLevel"] = ({scriptsLibrary, player, radiationLevel}) => {
      if (radiationLevel < 150) {
        // very nauseous
        // No Effect
      } else if (radiationLevel < 300) {
        // slightly fatigued
        // Minor Radiation Poisoning
        // -1 STR
      } else if (radiationLevel < 450) {
        // vomiting does not stop
        // Advanced Radiation Poisoning
        // -1 STR
        // -1 AGI
      } else if (radiationLevel < 600) {
        // hair is falling out
        // Critical Radiation Poisoning
        // -2 STR
        // -1 END
        // -2 AGI
        // -5% HP

      } else if (radiationLevel < 1000) {
        // skin is falling off
        // Deadly Radiation Poisoning
        // -4 STR
        // -3 PER
        // -3 END
        // -3 CHA
        // -1 INT
        // -5 AGI
        // -15% HP
      } else {
        // intense agony, Fatal Radiation Poisoning
        // -6 STR
        // -5 PER
        // -5 END
        // -5 CHA
        // -3 INT
        // -6 AGI
        // 24h to drop below 1000 or death
      }

      return null;
    };
  }

  execute(key: string, globalVariables: object): { script: any, globalVariables: object } {
    const newLocal = this.scripts[key];
    if (!newLocal) {
      console.error(`Script not found. ${key}`);
      return {script: () => null, globalVariables: {}};
    }
    return {script: newLocal, globalVariables};
  }
}

export const scriptsLibrary = new Scripts();
