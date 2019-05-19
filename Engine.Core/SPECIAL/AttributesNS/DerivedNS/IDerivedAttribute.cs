using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.DerivedNS
{
    public interface IDerivedAttribute<TValue> : IAbstractEntity<string>, ITranslation<IBaseTranslation>
    {
        TValue Value { get; }
    }
}
