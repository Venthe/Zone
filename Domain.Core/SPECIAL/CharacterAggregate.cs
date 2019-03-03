using Engine.Core.SPECIAL.AttributesNS.BaseNS;
using Engine.Core.SPECIAL.AttributesNS.DerivedNS;
using Engine.Core.SPECIAL.KarmaNS;
using Engine.Core.SPECIAL.PerksNS;
using Engine.Core.SPECIAL.ReputationNS;
using Engine.Core.SPECIAL.SkillsNS;

namespace Engine.Core.SPECIAL
{
    public class CharacterAggregate
    {
        public const int MaxLevel = 30;

        public int Level { get; } = 1;
        public string Name { get; set; }

        public Attributes Attributes { get; }
        public DerivedAttributes DerivedAttributes { get; }
        public Karma Karma { get; }
        // TODO: Add traits
        // TODO: Add Equipment
        // TODO: Add Companion(s)
        // TDOD: Effects
        public Reputation Reputation { get; }
        public Skills Skills { get; }
        public Perks Perks { get; }

        public CharacterAggregate()
        {
            Attributes = new Attributes();
            DerivedAttributes = new DerivedAttributes();
            Skills = new Skills(this);
            Karma = new Karma(this);
            Reputation = new Reputation();
            Perks = new Perks();
        }

        public override string ToString() => $"{Name}, level {Level}\n{Karma}\n{Reputation}\n{Attributes}\n{DerivedAttributes}\n{Skills}\n{Perks}";
    }
}
