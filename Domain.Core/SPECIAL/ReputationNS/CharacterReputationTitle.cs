namespace Engine.Core.SPECIAL.ReputationNS
{
    public class CharacterReputationTitle : BaseTranslation
    {
        public const string Berserker = "Berserker";
        public const string Champion = "Champion";
        public const string Childkiller = "Childkiller";
        public const string Gigolo = "Gigolo";
        public const string GraveDigger = "Grave Digger";
        public const string MadeMan = "MadeMan";
        public const string Married = "Married";
        public const string PornStar = "PornStar";
        public const string Prizefighter = "Prizefighter";
        public const string Separated = "Separated";
        public const string Sexpert = "Sexpert";
        public const string Slaver = "Slaver";
        public const string VirginOfTheWastes = "VirginOfTheWastes";

        public CharacterReputationTitle(string id, string name, string description, string obtaining, string effects) : base(id, name, description)
        {
            Obtaining = obtaining;
            Effects = effects;
        }

        public string Obtaining { get; set; }
        public string Effects { get; set; }
    }
}
