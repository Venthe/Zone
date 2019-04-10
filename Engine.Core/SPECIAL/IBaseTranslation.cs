using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL
{
    public interface IBaseTranslation : IAbstractEntity<string>
    {
        string Description { get; set; }
        string Name { get; set; }
    }
}
