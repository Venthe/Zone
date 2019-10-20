﻿namespace Engine.Core.Initializer.Translations
{
    using Engine.Core.SPECIAL;
    using Engine.Core.SPECIAL.ReputationNS;

    class ReputationTranslationsInitializer : IInitializer
    {
        public void Initialize(ref Game game)
        {
            var translations = new ReputationTranslationRepository();

            translations.Add(new BaseTranslation(ReputationLabel.Neutral, "Neutral", "People don't know enough about you to form an opinion"));
            translations.Add(new BaseTranslation(ReputationLabel.Accepted, "Accepted", "Folks have come to accept you for your helpful nature"));
            translations.Add(new BaseTranslation(ReputationLabel.Liked, "Liked", "Enough news of your good works has been passed around that people like you"));
            translations.Add(new BaseTranslation(ReputationLabel.Idolized, "Idolized", "Renowned for your extensive support and goodwill, you are idolized by the community"));

            translations.Add(new BaseTranslation(ReputationLabel.Shunned, "Shunned", "You've left a poor impression on the community and may be shunned as a result"));
            translations.Add(new BaseTranslation(ReputationLabel.Mixed, "Mixed", "A little bit good mixed with a little bit bad, people haven't figured you out yet"));
            translations.Add(new BaseTranslation(ReputationLabel.SmilingTroublemaker, "Smiling Troublemaker", "People know you're good at heart even though you're occasionally a troublemaker"));
            translations.Add(new BaseTranslation(ReputationLabel.GoodNaturedRascal, "Good-Natured Rascal", "Your reputation as a good-natured friend of the community manages to outshine your dark side"));

            translations.Add(new BaseTranslation(ReputationLabel.Hated, "Hated", "Now that folks know you're bad, most people outright hate you"));
            translations.Add(new BaseTranslation(ReputationLabel.SneeringPunk, "Sneering Punk", "Even though you've done some good for the community, people still think you're a punk"));
            translations.Add(new BaseTranslation(ReputationLabel.Unpredictable, "Unpredictable", "No one's sure what to make of your unpredictable nature, but you've left a strong impression"));
            translations.Add(new BaseTranslation(ReputationLabel.DarkHero, "Dark Hero", "Folks still think you're some kind of hero, but you sure can be nasty sometimes"));

            translations.Add(new BaseTranslation(ReputationLabel.Vilified, "Vilified", "For your overwhelmingly monstrous behavior, you have become vilified by the community"));
            translations.Add(new BaseTranslation(ReputationLabel.MercifulThug, "Merciful Thug", "Despite your reputation as a thug, you are known to occasionally show a charitable side"));
            translations.Add(new BaseTranslation(ReputationLabel.SoftHeartedDevil, "Soft-Hearted Devil", "Most people say you're the devil himself, but most admit you've also done a world of good"));
            translations.Add(new BaseTranslation(ReputationLabel.WildChild, "Wild Child", "Your wild, seemingly capricious behavior leaves people scratching their heads in confusion and avoiding close contact"));
        }
    }
}
