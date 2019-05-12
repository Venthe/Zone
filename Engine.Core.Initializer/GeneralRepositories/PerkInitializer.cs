using Engine.Core.SPECIAL.PerksNS;

namespace Engine.Core.Initializer.GeneralRepositories
{
    class PerkInitializer : IInitializer
    {
        public void Initialize(ref Game game)
        {
            var perks = new PerkRepository();

            perks.Add(new Perk(Perk.BlackWidow, null));
            perks.Add(new Perk(Perk.LadyKiller, null));
        }
    }
}
