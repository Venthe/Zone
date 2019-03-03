using System;
using System.Collections.Generic;
using System.Linq;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.PerksNS
{
    public class Perks : IRepository<Perk, string>
    {
        private readonly IRepository<Perk, string> perks;
        private readonly IReadOnlyRepository<Perk, string> perkRepository = new PerkRepository();

        public Perks()
        {
            this.perks = new InMemoryRepository<Perk, string>();
        }

        public void Add(string id) => perks.Add(perkRepository.GetById(id));
        public void Add(Perk entity) => perks.Add(perkRepository.GetById(entity.Id));
        public void Delete(string id) => perks.Delete(id);
        public void Edit(Perk entity) => throw new NotImplementedException();
        public Perk GetById(string id) => perks.GetById(id);
        public IEnumerable<Perk> List() => perks.List();
        public IEnumerable<Perk> List(Func<Perk, bool> predicate) => perks.List(predicate);

        public override string ToString() => "Perks:\n" + string.Join("\n  ", (from perk in perks.List() select perk.ToString()).ToList());
    }
}
