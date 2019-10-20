namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public interface IBaseTranslation : IAbstractEntity<string> {
        string Description { get; set; }
        string Name { get; set; }
    }
}
