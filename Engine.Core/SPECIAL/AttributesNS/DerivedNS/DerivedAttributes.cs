using System.Collections.Generic;
using System.Linq;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.DerivedNS
{
    public class DerivedAttributes : IReadOnlyRepository<DerivedAttribute, string>
    {
        private IReadOnlyRepository<DerivedAttribute, string> attributes;

        public DerivedAttributes()
        {
            var attributes = new Dictionary<string, DerivedAttribute>()
            {
                [DerivedAttribute.ActionPoints] = new DerivedAttribute(DerivedAttribute.ActionPoints),
                [DerivedAttribute.CarryWeight] = new DerivedAttribute(DerivedAttribute.CarryWeight),
                [DerivedAttribute.CompanionNerve] = new DerivedAttribute(DerivedAttribute.CompanionNerve),
                [DerivedAttribute.CriticalChance] = new DerivedAttribute(DerivedAttribute.CriticalChance),
                [DerivedAttribute.DamageResistance] = new DerivedAttribute(DerivedAttribute.DamageResistance),
                [DerivedAttribute.DamageThreshold] = new DerivedAttribute(DerivedAttribute.DamageThreshold),
                [DerivedAttribute.Dehydration] = new DerivedAttribute(DerivedAttribute.Dehydration),
                [DerivedAttribute.Fatigue] = new DerivedAttribute(DerivedAttribute.Fatigue),
                [DerivedAttribute.FireResistance] = new DerivedAttribute(DerivedAttribute.FireResistance),
                [DerivedAttribute.HitPoints] = new DerivedAttribute(DerivedAttribute.HitPoints),
                [DerivedAttribute.MeleeDamage] = new DerivedAttribute(DerivedAttribute.MeleeDamage),
                [DerivedAttribute.PoisonResistance] = new DerivedAttribute(DerivedAttribute.PoisonResistance),
                [DerivedAttribute.RadiationResistance] = new DerivedAttribute(DerivedAttribute.RadiationResistance),
                [DerivedAttribute.ReloadSpeed] = new DerivedAttribute(DerivedAttribute.ReloadSpeed),
                [DerivedAttribute.SkillRate] = new DerivedAttribute(DerivedAttribute.SkillRate),
                [DerivedAttribute.Starvation] = new DerivedAttribute(DerivedAttribute.Starvation),
                [DerivedAttribute.UnarmedDamage] = new DerivedAttribute(DerivedAttribute.UnarmedDamage)
            };

            this.attributes = new InMemoryRepository<DerivedAttribute, string>(attributes);
        }

        public DerivedAttribute GetById(string id) => attributes.GetById(id);
        public IEnumerable<DerivedAttribute> List() => attributes.List();
        public IEnumerable<DerivedAttribute> List(System.Func<DerivedAttribute, bool> predicate) => attributes.List(predicate);

        public override string ToString() => "Attributes:\n\t" + string.Join("\n\t", (from attribute in attributes.List() select attribute.ToString()).ToList());
    }
}
