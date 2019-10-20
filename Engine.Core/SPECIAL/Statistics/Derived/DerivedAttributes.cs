namespace Engine.Core.SPECIAL {
    using System.Collections.Generic;
    using Engine.Core.Sharedkernel.Repositories;

    internal class DerivedAttributes : IDerivedAttributes {
        private readonly IReadOnlyRepository<IDerivedAttribute<int>, string> attributes;

        public DerivedAttributes() {
            var attributes = new Dictionary<string, IDerivedAttribute<int>>() {
                [DeprivedAttributeLabel.ActionPoints] = new DeprivedAttribute(DeprivedAttributeLabel.ActionPoints),
                [DeprivedAttributeLabel.CarryWeight] = new DeprivedAttribute(DeprivedAttributeLabel.CarryWeight),
                [DeprivedAttributeLabel.CompanionNerve] = new DeprivedAttribute(DeprivedAttributeLabel.CompanionNerve),
                [DeprivedAttributeLabel.CriticalChance] = new DeprivedAttribute(DeprivedAttributeLabel.CriticalChance),
                [DeprivedAttributeLabel.DamageResistance] = new DeprivedAttribute(DeprivedAttributeLabel.DamageResistance),
                [DeprivedAttributeLabel.DamageThreshold] = new DeprivedAttribute(DeprivedAttributeLabel.DamageThreshold),
                [DeprivedAttributeLabel.Dehydration] = new DeprivedAttribute(DeprivedAttributeLabel.Dehydration),
                [DeprivedAttributeLabel.Fatigue] = new DeprivedAttribute(DeprivedAttributeLabel.Fatigue),
                [DeprivedAttributeLabel.FireResistance] = new DeprivedAttribute(DeprivedAttributeLabel.FireResistance),
                [DeprivedAttributeLabel.HitPoints] = new DeprivedAttribute(DeprivedAttributeLabel.HitPoints),
                [DeprivedAttributeLabel.MeleeDamage] = new DeprivedAttribute(DeprivedAttributeLabel.MeleeDamage),
                [DeprivedAttributeLabel.PoisonResistance] = new DeprivedAttribute(DeprivedAttributeLabel.PoisonResistance),
                [DeprivedAttributeLabel.RadiationResistance] = new DeprivedAttribute(DeprivedAttributeLabel.RadiationResistance),
                [DeprivedAttributeLabel.ReloadSpeed] = new DeprivedAttribute(DeprivedAttributeLabel.ReloadSpeed),
                [DeprivedAttributeLabel.SkillRate] = new DeprivedAttribute(DeprivedAttributeLabel.SkillRate),
                [DeprivedAttributeLabel.Starvation] = new DeprivedAttribute(DeprivedAttributeLabel.Starvation),
                [DeprivedAttributeLabel.UnarmedDamage] = new DeprivedAttribute(DeprivedAttributeLabel.UnarmedDamage)
            };

            this.attributes = new InMemoryRepository<IDerivedAttribute<int>, string>(attributes);
        }

        public IDerivedAttribute<int> GetById(string id) => attributes.GetById(id);
        public IEnumerable<IDerivedAttribute<int>> List() => attributes.List();
        public IEnumerable<IDerivedAttribute<int>> List(System.Func<IDerivedAttribute<int>, bool> predicate) => attributes.List(predicate);
    }
}
