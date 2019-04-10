using System;

namespace Engine.Core.Sharedkernel.Repositories
{
    public interface ITranslatedEntity<TTranslationType, TIdType> : IAbstractEntity<TIdType> where TIdType : IEquatable<TIdType>
    {
        TTranslationType Translation { get; }
    }
}
