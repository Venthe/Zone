using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Utilities;

namespace Engine.Core.SPECIAL {    public class Skill {
        public const string Barter = "Barter";
        public const string EnergyWeapons = "EnergyWeapons";
        public const string Explosives = "Explosives";
        public const string BigGuns = "BigGuns";
        public const string SmallGuns = "SmallGuns";
        public const string Lockpick = "Lockpick";
        public const string Medicine = "Medicine";
        public const string MeleeWeapons = "MeleeWeapons";
        public const string Repair = "Repair";
        public const string Science = "Science";
        public const string Sneak = "Sneak";
        public const string Speech = "Speech";
        public const string Survival = "Survival";
        public const string Unarmed = "Unarmed";

        private static readonly ILoggerService Logger = new LoggerService(typeof(Skills));
        private readonly IScriptRepository scriptRepository = new ScriptRepository();

        public IBaseTranslation Translation => translations.GetById(Id);

        private const int MaxSkillPoints = 100;
        private const int MinSkillPoints = 1;

        private readonly Attribute baseAttribute;
        public bool IsTagged { get; set; } = false;
        private int _skillPoints;

        public int SkillPoints {
            get => _skillPoints;
            set {
                if (value > MaxSkillPoints) {
                    Logger.Log("You cannot set skill point above max");
                } else if (value < MinSkillPoints) {
                    Logger.Log("You cannot set skill point below min");
                } else {
                    _skillPoints = value;
                }
            }
        }

        public Skill(string characterSkillIdentifier, Attribute baseAttribute) {
            Id = characterSkillIdentifier;
            this.baseAttribute = baseAttribute;
            SkillPoints = 2;
        }

        public int Value => (IsTagged ? 15 : 0) + SkillPoints + (int) scriptRepository.GetById("baseSkillValue").Execute(baseAttribute.Value);

        public override string ToString() => $"[{Id}:{Translation.Name}] {Value}\n  {Translation.Description}";
    }
}
