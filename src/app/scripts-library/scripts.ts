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
