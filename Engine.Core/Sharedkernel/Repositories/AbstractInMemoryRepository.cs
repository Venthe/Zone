using System;
using System.Collections.Generic;

namespace Engine.Core.Sharedkernel.Repositories
{
    public abstract class AbstractInMemoryRepository<TEntityType, TIdType> : IRepository<TEntityType, TIdType>
        where TEntityType : IAbstractEntity<TIdType>
        where TIdType : IEquatable<TIdType>
    {
        protected readonly static IRepository<TEntityType, TIdType> repository = new InMemoryRepository<TEntityType, TIdType>();

        public virtual void Add(TEntityType entity) => repository.Add(entity);
        public virtual void Delete(TIdType id) => repository.Delete(id);
        public virtual void Edit(TEntityType entity) => repository.Edit(entity);
        public virtual TEntityType GetById(TIdType id) => repository.GetById(id);
        public virtual IEnumerable<TEntityType> List() => repository.List();
        public virtual IEnumerable<TEntityType> List(Func<TEntityType, bool> predicate) => repository.List(predicate);
    }
}
