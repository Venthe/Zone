using System;

namespace Engine.Core.Sharedkernel.Repositories
{
    public interface IRepository<TEntityType, TIdType> : IReadOnlyRepository<TEntityType, TIdType>
        where TEntityType : IAbstractEntity<TIdType>
        where TIdType : IEquatable<TIdType>
    {
        void Add(TEntityType entity);
        void Delete(TIdType id);
        void Edit(TEntityType entity);
    }
}
