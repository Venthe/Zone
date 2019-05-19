using System;
using System.Collections.Generic;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.TraitsNS
{
    internal class Traits : ITraits
    {
        private readonly IRepository<Trait, string> traits;
        private readonly IReadOnlyRepository<Trait, string> traitRepository = new TraitRepository();

        public Traits()
        {
            traits = new InMemoryRepository<Trait, string>();
        }

        public void Add(string id) => traits.Add(traitRepository.GetById(id));
        public void Add(Trait entity) => traits.Add(traitRepository.GetById(entity.Id));
        public void Delete(string id) => traits.Delete(id);
        public void Edit(Trait entity) => throw new NotImplementedException();
        public Trait GetById(string id) => traits.GetById(id);
        public IEnumerable<Trait> List() => traits.List();
        public IEnumerable<Trait> List(Func<Trait, bool> predicate) => traits.List(predicate);
    }
}
