using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.DerivedNS
{
    public class DerivedAttribute : AbstractAttribute<int, IBaseTranslation>
    {
        public static readonly string ActionPoints = "ActionPoints";
        public static readonly string CarryWeight = "CarryWeight";
        public static readonly string CompanionNerve = "CompanionNerve";
        public static readonly string CriticalChance = "CriticalChance";
        public static readonly string DamageResistance = "DamageResistance";
        public static readonly string DamageThreshold = "DamageThreshold";
        public static readonly string Dehydration = "Dehydration";
        public static readonly string Fatigue = "Fatigue";
        public static readonly string FireResistance = "FireResistance";
        public static readonly string HitPoints = "HitPoints";
        public static readonly string MeleeDamage = "MeleeDamage";
        public static readonly string PoisonResistance = "PoisonResistance";
        public static readonly string RadiationResistance = "RadiationResistance";
        public static readonly string ReloadSpeed = "ReloadSpeed";
        public static readonly string SkillRate = "SkillRate";
        public static readonly string Sleep = "Sleep";
        public static readonly string Starvation = "Starvation";
        public static readonly string UnarmedDamage = "UnarmedDamage";

        private ScriptRepository scriptRepository = new ScriptRepository();
        private readonly IReadOnlyRepository<IBaseTranslation, string> translations = new DerivedAttributeTranslationRepository();

        public DerivedAttribute(string id)
        {
            Id = id;
        }

        public override int Value => (int)(scriptRepository.GetById(Id)?.Execute() ?? 0);

        public override IBaseTranslation Translation => translations.GetById(Id);
    }
}
