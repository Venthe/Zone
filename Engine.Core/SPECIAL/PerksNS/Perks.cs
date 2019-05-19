using System;
using System.Collections.Generic;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.PerksNS
{
    internal class Perks : IPerks
    {
        private readonly IRepository<Perk, string> perks;
        private readonly IReadOnlyRepository<Perk, string> perkRepository = new PerkRepository();

        public Perks()
        {
            perks = new InMemoryRepository<Perk, string>();
        }

        public void Add(string id) => perks.Add(perkRepository.GetById(id));
        public void Add(Perk entity) => perks.Add(perkRepository.GetById(entity.Id));
        public void Delete(string id) => perks.Delete(id);
        public void Edit(Perk entity) => throw new NotImplementedException();
        public Perk GetById(string id) => perks.GetById(id);
        public IEnumerable<Perk> List() => perks.List();
        public IEnumerable<Perk> List(Func<Perk, bool> predicate) => perks.List(predicate);
    }
}
