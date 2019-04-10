using System;
using System.Collections.Generic;
using System.Text;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.TraitsNS
{
    public class Trait : AbstractEntity<string>, ITranslatedEntity<IBaseTranslation, string>
    {
        public const int MaxTraitCount = 2;

        #region Identifiers
        public const string BuiltToDestroy = "BuiltToDestroy";
        public const string ChemReliant = "ChemReliant";
        public const string CleanLiving = "CleanLiving";
        public const string FastShot = "FastShot";
        public const string FeralKid = "FeralKid";
        public const string Finesse = "Finesse";
        public const string FourEyes = "FourEyes";
        public const string Gifted = "Gifted";
        public const string GoodNatured = "GoodNatured";
        public const string HeavyHanded = "HeavyHanded";
        public const string Jinxed = "Jinxed";
        public const string Kamikaze = "Kamikaze";
        public const string LooseCannon = "LooseCannon";
        public const string NightPerson = "NightPerson";
        public const string OneHander = "OneHander";
        public const string OneInAMillion = "OneInAMillion";
        public const string RedScare = "RedScare";
        public const string SexAppeal = "SexAppeal";
        public const string Skilled = "Skilled";
        public const string SmallFrame = "SmallFrame";
        public const string TriggerDiscipline = "TriggerDiscipline";
        public const string WildWasteland = "WildWasteland";
        public const string Claustrophobia = "Claustrophobia";
        public const string EarlyBird = "EarlyBird";
        public const string Hoarder = "Hoarder";
        public const string HotBlooded = "HotBlooded";
        public const string LogansLoophole = "LogansLoophole";
        public const string TechWizard = "TechWizard";
        #endregion Identifiers

        private readonly IReadOnlyRepository<IBaseTranslation, string> translations = new TraitTranslationRepository();

        public Trait(string id)
        {
            Id = id;
        }

        public IBaseTranslation Translation => translations.GetById(Id);

        public override string ToString() => $"[{Id}:{Translation?.Name}]\n  {Translation?.Description}";
    }
}
