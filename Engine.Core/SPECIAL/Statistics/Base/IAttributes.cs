namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public interface IAttributes : IReadOnlyRepository<Attribute, string> {
        int AttributePointsToBeDistributed { get; set; }
    }
}
