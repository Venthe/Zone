using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.DerivedNS
{
    public interface IDerivedAttributes: IReadOnlyRepository<IDerivedAttribute<int>, string>
    {
    }
}
