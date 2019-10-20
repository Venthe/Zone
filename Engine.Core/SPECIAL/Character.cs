namespace Engine.Core.SPECIAL {

    internal class Chracter {
        public Name Name { get; set; }
        public CharacterProgress Level { get; }
        public IRadiation Radiation { get; }
        public IAttributes Attributes { get; }
        public IDerivedAttributes DerivedAttributes { get; }
        public Karma Karma { get; }
        public Traits Traits { get; }
        public IRace Race { get; }
        public Equipment Equipment { get; }
        public IParty Party { get; }
        public Effects Effects { get; }
        public Reputation Reputation { get; }
        public Skills Skills { get; }
        public Perks Perks { get; }
        public Quests Quests { get; }
    }
}
