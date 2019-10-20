namespace Engine.Core.Initializer
{
    using System.Collections.Generic;
    using Engine.Core.Initializer.GeneralRepositories;
    using Engine.Core.Initializer.Translations;

    public static class GameInitializer
    {
        private const string SamplePlayerName = "SamplePlayerName";

        private static readonly IList<IInitializer> translationInitializers = new List<IInitializer> {
            new ScriptInitializer(),
            new PerkInitializer(),
            new AttributesTranslationsInitializer(),
            new CharacterReputationTitleTranslationsInitializer(),
            new DerivedAttributesTranslationsInitializer(),
            new KarmaTranslationsInitializer(),
            new ReputationTranslationsInitializer(),
            new SkillTranslationsInitializer()
        };

        public static Game Initialize()
        {
            var game = new Game();

            game.Player.Name = SamplePlayerName;

            return game;
        }

        public static void LoadSampleData(ref Game game)
        {
            foreach (var initializer in translationInitializers)
            {
                initializer.Initialize(ref game);
            }
        }
    }
}
