namespace Engine.Core.Initializer.GeneralRepositories
{
    using Engine.Core.SPECIAL.PerksNS;

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
