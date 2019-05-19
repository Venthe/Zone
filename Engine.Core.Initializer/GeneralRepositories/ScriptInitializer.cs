using System;
using System.Collections;
using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Utilities;
using Engine.Core.SPECIAL;
using Engine.Core.SPECIAL.AttributesNS.BaseNS;
using Engine.Core.SPECIAL.AttributesNS.DerivedNS;
using Engine.Core.SPECIAL.SkillsNS;
using Attribute = Engine.Core.SPECIAL.AttributesNS.BaseNS.Attribute;

namespace Engine.Core.Initializer.GeneralRepositories
{
    class ScriptInitializer : IInitializer
    {
        ILoggerService loggerService;
        IScriptRepository scripts;

        public ScriptInitializer()
        {
            loggerService = new LoggerService(typeof(ScriptInitializer));
            scripts = new ScriptRepository();
        }

        public void Initialize(ref Game game)
        {

            // TODO: Fixme
            scripts.Add(new Script(game, "sexGod", (scriptsLibrary, baseObject, argument) => false));

            scripts.Add(new Script(game.Player, "objSexRating", (scriptsLibrary, player, argument) =>
            {
                var attributes = ((ICharacter)player).Attributes;
                var perks = ((ICharacter)player).Perks;

                var charisma = attributes.GetById(Attribute.Charisma).Value;
                var endurance = attributes.GetById(Attribute.Endurance).Value;
                var agility = attributes.GetById(Attribute.Agility).Value;
                var strength = attributes.GetById(Attribute.Strength).Value;
                var kamaSutraMaster = perks.GetById("KamaSutraMaster")?.Rank > 0 ? 2 : 0;
                var sexAppeal = perks.GetById("SexAppeal")?.Rank > 0 ? 1 : 0;
                var sexGod = (bool)scriptsLibrary.GetById("sexGod")?.Execute() == true ? 2 : 0;
                var perkModifier = kamaSutraMaster + sexAppeal + sexGod;
                var result = (((charisma * 50) + (endurance * 25) + (agility * 13) + (strength * 12)) / 100) + perkModifier;

                if (result >= 7) { return "sexRatingGreat"; }
                else if (result >= 5) { return "sexRatingGood"; }
                else if (result >= 3) { return "sexRatingNormal"; }
                else if (result >= 2) { return "sexRatingBad"; }
                else { return "sexRatingHorrible"; }
            }));

            scripts.Add(new Script(game.Player, "weaponFinalDamage", (scriptsLibrary, baseObject, argument) =>
            {
                // FIXME 
                var weaponBaseDamage = 1;
                // character.Equipment.GetCurrentWeapon().BaseDamage;
                // var governingSkill = character.Equipment.GetCurrentWeapon().SkillType;
                var governingSkillValue = 5;
                // character.Attributes.GetAttribute(governingSkill).Value;

                return weaponBaseDamage * (((50 + governingSkillValue) * 0.5) / 100);
            }));

            scripts.Add(new Script(game.Player, "baseSkillValue", (scriptsLibrary, player, argument) =>
            {
                var defaultArgumentValue = 5;
                var statValue = argument ?? defaultArgumentValue;
                var luckValue = ((ICharacter)player).Attributes.GetById(Attribute.Luck).Value;
                return 2 + (2 * (int)statValue) + (luckValue / 2);
            }));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.ActionPoints, (scriptsLibrary, attributes, argument) => 65 + (((IAttributes)attributes).GetById(Attribute.Agility).Value * 3)));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.CarryWeight, (scriptsLibrary, attributes, argument) => 150 + (((IAttributes)attributes).GetById(Attribute.Strength).Value * 10)));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.CompanionNerve, (scriptsLibrary, attributes, argument) => (int)(0.05 * ((IAttributes)attributes).GetById(Attribute.Charisma).Value)));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.CriticalChance, (scriptsLibrary, attributes, argument) => (int)(0.01 * ((IAttributes)attributes).GetById(Attribute.Luck).Value)));

            scripts.Add(new Script(game.Player, DeprivedAttributeLabel.HitPoints, (scriptsLibrary, player, argument) => (((ICharacter)player).Level.Level * 5) + 95 + (20 * ((ICharacter)player).Attributes.GetById(Attribute.Endurance).Value)));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.MeleeDamage, (scriptsLibrary, attributes, argument) => (int)(0.5 * ((IAttributes)attributes).GetById(Attribute.Strength).Value)));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.PoisonResistance, (scriptsLibrary, attributes, argument) => (5 * ((IAttributes)attributes).GetById(Attribute.Endurance).Value) - 5));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.RadiationResistance, (scriptsLibrary, attributes, argument) => (2 * ((IAttributes)attributes).GetById(Attribute.Endurance).Value) - 2));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.ReloadSpeed, (scriptsLibrary, attributes, argument) =>
            {
                float value = ((IAttributes)attributes).GetById(Attribute.Agility).Value;
                return (int)(value > 5 ? 0.1 * (value - 5) : 0);
            }));

            scripts.Add(new Script(game.Player.Attributes, DeprivedAttributeLabel.SkillRate, (scriptsLibrary, attributes, argument) => (int)(10 + (0.5 * attributes.GetById(Attribute.Intelligence).Value))));

            scripts.Add(new Script(game.Player.Skills, DeprivedAttributeLabel.UnarmedDamage, (scriptsLibrary, skills, argument) => (int)(0.5 + (skills.GetById(Skill.Unarmed).Value / 20))));

            scripts.Add(new Script(game.Player.Perks, "addPerk", (scriptsLibrary, perks, perkName) =>
            {
                perks.Add(perkName);
                return null;
            }));

            scripts.Add(new Script(game.Player, "player", (scriptsLibrary, player, argument) =>
            {
                return scriptsLibrary.GetById("log").Execute(player);
            }));

            scripts.Add(new Script(null, "log", (_, __, argument) =>
            {
                string result = argument is IList ? (string)String.Join(" ", argument) : (string)argument.ToString();
                loggerService.Log(result);

                return null;
            }));

            scripts.Add(new Script(game.Player, "calculateExperienceNeededForNextLevel", (scriptsLibrary, player, argument) =>
            {
                var level = ((ICharacter)player).Level.Level;
                return 25 * ((3 * level) + 2) * (level - 1);
            }));


            // TODO: As effects?
            scripts.Add(new Script(game.Player.Radiation, "handleRadiationLevel", (scriptsLibrary, player, radiationLevel) =>
            {
                if (radiationLevel < 150)
                {
                    // very nauseous
                    // No Effect 
                }
                else if (radiationLevel < 300)
                {
                    // slightly fatigued 
                    // Minor Radiation Poisoning
                    // -1 STR
                }
                else if (radiationLevel < 450)
                {
                    // vomiting does not stop
                    // Advanced Radiation Poisoning
                    // -1 STR
                    // -1 AGI
                }
                else if (radiationLevel < 600)
                {
                    // hair is falling out
                    // Critical Radiation Poisoning 
                    // -2 STR
                    // -1 END
                    // -2 AGI
                    // -5% HP

                }
                else if (radiationLevel < 1000)
                {
                    // skin is falling off
                    // Deadly Radiation Poisoning
                    // -4 STR
                    // -3 PER
                    // -3 END
                    // -3 CHA
                    // -1 INT
                    // -5 AGI
                    // -15% HP
                }
                else
                {
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
            }));
        }
    }
}
