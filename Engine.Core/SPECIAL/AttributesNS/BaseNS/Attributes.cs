﻿using System.Collections.Generic;
using System.Linq;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.BaseNS
{
    public class Attributes : IReadOnlyRepository<Attribute, string>
    {
        private readonly IReadOnlyRepository<Attribute, string> attributes;
        internal const int DefaultAttributePointsToBeDistributed = 5;

        internal Attributes()
        {
            IDictionary<string, Attribute> attributes = new Dictionary<string, Attribute>()
            {
                [Attribute.Strength] = new Attribute(Attribute.Strength),
                [Attribute.Perception] = new Attribute(Attribute.Perception),
                [Attribute.Endurance] = new Attribute(Attribute.Endurance),
                [Attribute.Charisma] = new Attribute(Attribute.Charisma),
                [Attribute.Intelligence] = new Attribute(Attribute.Intelligence),
                [Attribute.Agility] = new Attribute(Attribute.Agility),
                [Attribute.Luck] = new Attribute(Attribute.Luck)
            };
            this.attributes = new InMemoryRepository<Attribute, string>(attributes);
        }

        // Attribute points to be distributed
        public int AttributePointsToBeDistributed { get; set; } = DefaultAttributePointsToBeDistributed;

        public Attribute GetById(string id) => attributes.GetById(id);
        public IEnumerable<Attribute> List() => attributes.List();
        public IEnumerable<Attribute> List(System.Func<Attribute, bool> predicate) => attributes.List(predicate);

        public override string ToString() => "Attributes:\n\t" + string.Join("\n\t", (from attribute in attributes.List() select attribute.ToString()).ToList());
    }
}
