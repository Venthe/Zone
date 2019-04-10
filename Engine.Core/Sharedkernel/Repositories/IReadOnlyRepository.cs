using System;
using System.Collections.Generic;

namespace Engine.Core.Sharedkernel.Repositories
{
    public interface IReadOnlyRepository<TEntityType, TIdType>
        where TEntityType : IAbstractEntity<TIdType>
        where TIdType : IEquatable<TIdType>
    {
        TEntityType GetById(TIdType id);
        IEnumerable<TEntityType> List();
        IEnumerable<TEntityType> List(Func<TEntityType, bool> predicate);
    }
}
