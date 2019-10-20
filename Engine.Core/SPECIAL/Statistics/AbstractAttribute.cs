namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public abstract class AbstractAttribute<TValue, TTranslation> : AbstractEntity<string>, ITranslation<TTranslation>
        where TTranslation : IBaseTranslation {
        public abstract TValue Value { get; }
        public abstract TTranslation Translation { get; }

        public override string ToString() => $"[{Id}:{Translation?.Name}] {Value}\n  {Translation?.Description}";
    }
}
