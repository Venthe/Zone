using System;

namespace Engine.Core.Sharedkernel.Repositories
{
    public abstract class AbstractEntity<TIdType> : IAbstractEntity<TIdType> where TIdType : IEquatable<TIdType>
    {
        public virtual TIdType Id { get; protected set; }
    }
}
