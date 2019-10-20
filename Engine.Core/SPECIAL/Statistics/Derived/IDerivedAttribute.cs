namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public interface IDerivedAttribute<TValue> : IAbstractEntity<string>, ITranslation<IBaseTranslation> {
        TValue Value { get; }
    }
}
