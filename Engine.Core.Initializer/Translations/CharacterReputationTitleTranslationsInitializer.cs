using Engine.Core.SPECIAL.ReputationNS;

namespace Engine.Core.Initializer.Translations
{
    class CharacterReputationTitleTranslationsInitializer : IInitializer
    {
        public void Initialize(ref Game game)
        {
            var translations = new CharacterReputationTitleTranslationRepository();

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Berserker, "Berserker", "You have killed a large number of people. This is generally not a good thing to get known for. People from the wrong side of the track will like you a little more, however", "You get this title by killing at least 25 people, and at least twice as many Good people as Bad people", "Bad characters have a better reaction toward you in dialogue, while good characters have the opposite"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Champion, "Champion", "Your actions have revealed you to be a champion of the people. Your war against evil and villainy is widely known. Honorable people will respect you better", "This title is gained by killing many characters with bad Karma while having good or very good Karma and not already having the Childkiller title", "ood characters have a better reaction toward you in dialogue"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Childkiller, "Childkiller", "You have killed children, the youth of the wasteland. This is considered to be a really bad thing. You evil, evil person", "The player character receives this title by killing a child", "-30 points to initial reaction of both good and evil NPCs. Bounty hunters can be met during random encounters. Their equipment depends on your level, ranging from leather jackets and hunting rifles to power armor and miniguns (includes Avenger miniguns in Fallout 2)"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Gigolo, "Gigolo", "Let's be honest: You sleep with anything that walks on two legs. Sometimes, you're not even that discriminating", "You get this title by passing the objSexRating formula once with a rating of 9", "No effect on reaction"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.GraveDigger, "Grave Digger", "\"They're dead, they don't care,\" has become your motto. Digging up the remains of others is more than a hobby for you", "Dig up a grave", "Drains 5 Karma per grave"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.MadeMan, "Made Man", "You are a \"Made Man\" of the (Bishop/Mordino/Salvatore/Wright) Family. You are well-known, well-respected, and look great in a fedora", "The Chosen One gets this title by joining one of the four mafia families in New Reno and having an Intelligence above 4. For each mafia family there is a chain of quests, upon the completion special ones they can become a Made Man of that family, even as a female character", "Increased popularity in New Reno. Access to free sex at the Cat's Paw. Special stock and discounts available at the New Reno Arms. Jagged Jimmy J can be paralyzed if the Chosen One has an Intelligence below 4 and whenever by talking about \"the mortal coil.\". An opportunity to try the porn audition at the Golden Globes even with Charisma < 9. Hated by other mafia families. Drug dealers and bartenders in New Reno charge more."));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Married, "Married", "You got hitched. Hey, it's your problem, not ours", "This title is granted with CH 8 (or CH 7 and positive reputation in Modoc) and by seducing and marrying either Miria or Davin in respective town", "Davin or Miria become a permanent companion"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.PornStar, "Porn Star", "You are a big, bright, shining star. Your sexual exploits are well-known throughout New Reno", "Star in a porn film at the Golden Globes in New Reno", "Popularities in New Reno (only a female Porn Star will get infamy from New Reno prostitutes). One can paralyze Jagged Jimmy J with an Intelligence below 4 by asking him about \"this mortal coil? Or is it only possible when we free ourselves from our physical bodies?\". A female Chosen One can have sex with Lil' Jesus Mordino and T-Ray, even with Charisma less than 6 Ethyl Wright will not speak to porn stars. Drug dealers in New Reno charge more."));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Prizefighter, "Prizefighter", "You are the heavyweight champion of Northern California. You have gained fame, respect, the love of thousands... and a bonus to your toughness and unarmed skill", "You get this title by defeating the Masticator or Xander Holyland during the final boxing match at the Jungle Gym in New Reno", "You get popularity in New Reno +5% Unarmed +5% Damage Resistance You can paralyze Jagged Jimmy J when you have Intelligence less than 4 You can try the porn audition at the Golden Globes if you have Charisma less than 9 Drug dealers and bartenders in New Reno charge you more"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Separated, "Separated", "Your spouse is no longer with you. I hope you're happy", "To get this title, the Married title is required and the spouse is either dead, sold into slavery or divorced", "Davin or Miria disappear forever and talking to Grisham about it gives him a heart attack"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Sexpert, "Sexpert", "You know sex. You know foreplay. You know how to please a member of the opposite sex and leave them hungry for more", "This title by is obtained by having sex ten times with any sex-specific characters", "Improved sexual dialogue"));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.Slaver, "Slaver", "You have been marked as a member of the Slaver's Guild. The tattoo on your forehead makes your profession evident to everyone you meet", "received by joining the Slaver's Guild", ""));

            translations.Add(new CharacterReputationTitle(CharacterReputationTitle.VirginOfTheWastes, "Virgin of the Wastes", "“You really need to get out more. Your sexual exploits have been...well, two dimensional", "The Chosen One begins the game with this reputation", " This title has no effect in-game. It can be lost by sleeping one time with any sex-specific characters"));
        }
    }
}
