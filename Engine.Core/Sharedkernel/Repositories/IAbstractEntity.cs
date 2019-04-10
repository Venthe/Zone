using System;

namespace Engine.Core.Sharedkernel.Repositories
{
    public interface IAbstractEntity<TIdType> where TIdType : IEquatable<TIdType>
    {
        TIdType Id { get; }
    }
}
