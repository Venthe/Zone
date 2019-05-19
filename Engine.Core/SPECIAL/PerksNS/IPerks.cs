using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.PerksNS
{
    public interface IPerks : IRepository<Perk, string>
    {
        void Add(string id);
        string ToString();
    }
}
