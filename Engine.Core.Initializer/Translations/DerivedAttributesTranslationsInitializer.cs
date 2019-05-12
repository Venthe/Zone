using Engine.Core.SPECIAL;
using Engine.Core.SPECIAL.AttributesNS.DerivedNS;

namespace Engine.Core.Initializer.Translations
{
    class DerivedAttributesTranslationsInitializer : IInitializer
    {
        public void Initialize(ref Game game)
        {
            var translations = new DerivedAttributeTranslationRepository();

            translations.Add(new BaseTranslation(DerivedAttribute.ActionPoints, "Action points", "The higher the number, the more actions you can perform in a single V.A.T.S. round"));
            translations.Add(new BaseTranslation(DerivedAttribute.CarryWeight, "Carry Weight", "How much you can carry before you become overencumbered"));
            translations.Add(new BaseTranslation(DerivedAttribute.CompanionNerve, "Companion Nerve", "How much bonus damage and defense your companions receive"));
            translations.Add(new BaseTranslation(DerivedAttribute.CriticalChance, "Critical Chance", "Chance that a hit will inflict critical damage"));
            translations.Add(new BaseTranslation(DerivedAttribute.DamageResistance, "Damage Resistance", "Any damage taken is reduced by this percentage. It is applied before DT. Only a few rare non-player characters use DR"));
            translations.Add(new BaseTranslation(DerivedAttribute.DamageThreshold, "Damage Threshold", "This amount is subtracted from any damage taken"));
            translations.Add(new BaseTranslation(DerivedAttribute.Dehydration, "Dehydration", "A meter that will tell you if the player is dehydrated or hydrated. (Hardcore mode)"));
            translations.Add(new BaseTranslation(DerivedAttribute.Fatigue, "Fatigue", "How much special fatigue damage you can take before you are knocked unconscious"));
            translations.Add(new BaseTranslation(DerivedAttribute.FireResistance, "Fire Resistance", "All fire damage you receive is reduced by this percentage"));
            translations.Add(new BaseTranslation(DerivedAttribute.HitPoints, "Hit Points", "How much damage you can take before you die"));
            translations.Add(new BaseTranslation(DerivedAttribute.MeleeDamage, "Melee Damage", "Bonus damage with melee weapons"));
            translations.Add(new BaseTranslation(DerivedAttribute.PoisonResistance, "Poison Resistance", "All poison damage you receive is reduced by this percentage"));
            translations.Add(new BaseTranslation(DerivedAttribute.RadiationResistance, "Radiation Resistance", "How adept your body is at ignoring exposure to radiation"));
            translations.Add(new BaseTranslation(DerivedAttribute.ReloadSpeed, "Reload Speed", "The reduction of the amount of time taken to reload a weapon"));
            translations.Add(new BaseTranslation(DerivedAttribute.SkillRate, "Skill Rate", "How many skill points your character gains per level"));
            translations.Add(new BaseTranslation(DerivedAttribute.Starvation, "Starvation", "A meter that tells how hungry the player is. (Hardcore mode)"));
            translations.Add(new BaseTranslation(DerivedAttribute.UnarmedDamage, "Unarmed Damage", "Damage done with fists (damage of unarmed weapons is added to this value)"));
        }
    }
}
