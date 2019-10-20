namespace Engine.Core.Initializer.Translations
{
    using Engine.Core.SPECIAL;
    using Engine.Core.SPECIAL.SkillsNS;

    class SkillTranslationsInitializer : IInitializer
    {
        public void Initialize(ref Game game)
        {

            var skillsTranslations = new SkillTranslationRepository();

            skillsTranslations.Add(new BaseTranslation(Skill.Barter, "Barter", "Proficiency at trading and haggling. Also used to negotiate better quest rewards or occasionally as a bribe-like alternative to Speech"));

            skillsTranslations.Add(new BaseTranslation(Skill.EnergyWeapons, "Energy Weapons", "Proficiency at using energy-based weapons"));

            skillsTranslations.Add(new BaseTranslation(Skill.Explosives, "Explosives", "Proficiency at using explosive weaponry, disarming mines, and crafting explosives"));

            skillsTranslations.Add(new BaseTranslation(Skill.SmallGuns, "Small Guns", "Proficiency at using light weapons that fire standard ammunition"));

            skillsTranslations.Add(new BaseTranslation(Skill.BigGuns, "Big Guns", "Proficiency at using heavy weapons that fire standard ammunition"));

            skillsTranslations.Add(new BaseTranslation(Skill.Lockpick, "Lockpick", "Proficiency at picking locks"));

            skillsTranslations.Add(new BaseTranslation(Skill.Medicine, "Medicine", "Proficiency at using medical tools, drugs, and for crafting Doctor's Bags"));

            skillsTranslations.Add(new BaseTranslation(Skill.MeleeWeapons, "Melee Weapons", "Proficiency at using melee weapons"));

            skillsTranslations.Add(new BaseTranslation(Skill.Repair, "Repair", "Proficiency at repairing items and crafting items and ammunition"));

            skillsTranslations.Add(new BaseTranslation(Skill.Science, "Science", "Proficiency at hacking terminals, recycling energy ammunition at workbenches, crafting chems, and many dialog checks"));

            skillsTranslations.Add(new BaseTranslation(Skill.Sneak, "Sneak", "Proficiency at remaining undetected and stealing"));

            skillsTranslations.Add(new BaseTranslation(Skill.Speech, "Speech", "Proficiency at persuading others. Also used to negotiate for better quest rewards and to talk your way out of combat, convincing people to give up vital information and succeeding in multiple speech checks"));

            skillsTranslations.Add(new BaseTranslation(Skill.Survival, "Survival", "Proficiency at cooking, making poisons, and crafting \"natural\" equipment and consumables. Also yields increased benefits from food"));

            skillsTranslations.Add(new BaseTranslation(Skill.Unarmed, "Unarmed", "Proficiency at unarmed fighting"));
        }
    }
}
