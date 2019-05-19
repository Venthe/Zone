using Engine.Core.Sharedkernel.Utilities;
using Engine.Core.SPECIAL.AttributesNS.BaseNS;
using Engine.Core.SPECIAL.AttributesNS.DerivedNS;
using Engine.Core.SPECIAL.KarmaNS;
using Engine.Core.SPECIAL.LevelNS;
using Engine.Core.SPECIAL.PerksNS;
using Engine.Core.SPECIAL.RadiationNS;
using Engine.Core.SPECIAL.ReputationNS;
using Engine.Core.SPECIAL.SkillsNS;
using Engine.Core.SPECIAL.TraitsNS;

namespace Engine.Core.SPECIAL
{
    internal class CharacterAggregate : ICharacter
    {
        private static readonly ILoggerService Logger = new LoggerService(typeof(CharacterAggregate));

        public string Name { get; set; }
        public ICharacterProgress Level { get; }
        public IRadiation Radiation { get; }
        public IAttributes Attributes { get; }
        public IDerivedAttributes DerivedAttributes { get; }
        public IKarma Karma { get; }
        public ITraits Traits { get; }
        // TODO: Add Equipment
        // TODO: Add Companion(s)
        // TDOD: Effects
        // Mutations?
        public IReputation Reputation { get; }
        public ISkills Skills { get; }
        public IPerks Perks { get; }

        internal CharacterAggregate()
        {
            Attributes = new Attributes();
            DerivedAttributes = new DerivedAttributes();
            Skills = new Skills(this);
            Karma = new Karma(this);
            Reputation = new Reputation();
            Perks = new Perks();
            Radiation = new Radiation();
            Traits = new Traits();
            Level = new CharacterProgress();

            Level.LevelUpEvent += (int _) => LevelUp();
            Level.ExperienceGainedEvent += (int _) => ExperienceGained();
        }

        public void GainExperience(int amount) => Level.AddExperience(amount);

        private void LevelUp() => Logger.Log($"{Name} has gained a level. Current level: {Level.Level}");
        private void ExperienceGained() => Logger.Log($"{Name} has gained experience. Current Experience: {Level.Experience}/{Level.ExperienceToNextLevel}");
    }
}
