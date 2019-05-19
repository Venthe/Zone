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
    public interface ICharacter
    {
        IAttributes Attributes { get; }
        IDerivedAttributes DerivedAttributes { get; }
        IKarma Karma { get; }
        ICharacterProgress Level { get; }
        string Name { get; set; }
        IPerks Perks { get; }
        IRadiation Radiation { get; }
        IReputation Reputation { get; }
        ISkills Skills { get; }
        ITraits Traits { get; }

        void GainExperience(int amount);
    }
}
