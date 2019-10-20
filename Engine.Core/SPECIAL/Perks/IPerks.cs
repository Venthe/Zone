namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public interface Perks : IRepository<Perk, string> {
        void Add(string id);
        string ToString();
    }
}
