using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.TraitsNS
{
    public interface ITraits : IRepository<Trait, string>
    {
        void Add(string id);
        string ToString();
    }
}
