using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.BaseNS
{
    public interface IAttributes: IReadOnlyRepository<Attribute, string>
    {
        int AttributePointsToBeDistributed { get; set; }
    }
}
