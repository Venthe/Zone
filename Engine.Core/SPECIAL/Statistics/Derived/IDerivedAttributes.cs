namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public interface IDerivedAttributes : IReadOnlyRepository<IDerivedAttribute<int>, string> {
    }
}
