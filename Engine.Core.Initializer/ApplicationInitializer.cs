using System.Collections.Generic;
using Engine.Core.Scripting;
using Engine.Core.SPECIAL;
using Engine.Core.SPECIAL.AttributesNS.BaseNS;
using Engine.Core.SPECIAL.AttributesNS.DerivedNS;
using Engine.Core.SPECIAL.KarmaNS;
using Engine.Core.SPECIAL.PerksNS;
using Engine.Core.SPECIAL.ReputationNS;
using Engine.Core.SPECIAL.SkillsNS;

namespace Engine.Core.Initializer
{
    public static class ApplicationInitializer
    {
        public static void LoadSampleData(ref Game game)
        {
            InitializeScripts(ref game);
            InitializeSkillTranslations();
            InitializeCharacterReputationTitleTranslations();
            InitializeReputationTranslationRepository();
            InitializeKarmaTranslationsRepository();
            InitializeAttributesTranslationsRepository();
            InitializeDerivedAttributesTranslationsRepository();
            InitializePerkRepository();
        }

        private static void InitializeScripts(ref Game game)
        {
            var scripts = new ScriptRepository();

            // TODO: Fixme
            scripts.Add(new Script(game, "sexGod", (scriptsLibrary, baseObject, argument) => false));

            scripts.Add(new Script(game.Player, "objSexRating", (scriptsLibrary, player, argument) =>
            {
                var attributes = ((CharacterAggregate)player).Attributes;
                var perks = ((CharacterAggregate)player).Perks;

                var charisma = attributes.GetById(Attribute.Charisma).Value;
                var endurance = attributes.GetById(Attribute.Endurance).Value;
                var agility = attributes.GetById(Attribute.Agility).Value;
                var strength = attributes.GetById(Attribute.Strength).Value;
                var kamaSutraMaster = perks.GetById("KamaSutraMaster")?.Rank > 0 ? 2 : 0;
                var sexAppeal = perks.GetById("SexAppeal")?.Rank > 0 ? 1 : 0;
                var sexGod = (bool)scriptsLibrary.GetById("sexGod")?.Execute() == true ? 2 : 0;
                var perkModifier = kamaSutraMaster + sexAppeal + sexGod;
                var result = (((charisma * 50) + (endurance * 25) + (agility * 13) + (strength * 12)) / 100) + perkModifier;

                if (result >= 7) { return "sexRatingGreat"; }
                else if (result >= 5) { return "sexRatingGood"; }
                else if (result >= 3) { return "sexRatingNormal"; }
                else if (result >= 2) { return "sexRatingBad"; }
                else { return "sexRatingHorrible"; }
            }));

            scripts.Add(new Script(game.Player, "weaponFinalDamage", (scriptsLibrary, baseObject, argument) =>
            {
                // FIXME 
                var weaponBaseDamage = 1;
                // character.Equipment.GetCurrentWeapon().BaseDamage;
                // var governingSkill = character.Equipment.GetCurrentWeapon().SkillType;
                var governingSkillValue = 5;
                // character.Attributes.GetAttribute(governingSkill).Value;

                return weaponBaseDamage * (((50 + governingSkillValue) * 0.5) / 100);
            }));

            scripts.Add(new Script(game.Player, "baseSkillValue", (scriptsLibrary, player, argument) =>
            {
                var defaultArgumentValue = 5;
                var statValue = argument ?? defaultArgumentValue;
                var luckValue = ((CharacterAggregate)player).Attributes.GetById(Attribute.Luck).Value;
                return 2 + (2 * (int)statValue) + (luckValue / 2);
            }));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.ActionPoints, (scriptsLibrary, attributes, argument) => 65 + (((Attributes)attributes).GetById(Attribute.Agility).Value * 3)));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.CarryWeight, (scriptsLibrary, attributes, argument) => 150 + (((Attributes)attributes).GetById(Attribute.Strength).Value * 10)));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.CompanionNerve, (scriptsLibrary, attributes, argument) => (int)(0.05 * ((Attributes)attributes).GetById(Attribute.Charisma).Value)));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.CriticalChance, (scriptsLibrary, attributes, argument) => (int)(0.01 * ((Attributes)attributes).GetById(Attribute.Luck).Value)));

            scripts.Add(new Script(game.Player, DerivedAttribute.HitPoints, (scriptsLibrary, player, argument) => (((CharacterAggregate)player).Level * 5) + 95 + (20 * ((CharacterAggregate)player).Attributes.GetById(Attribute.Endurance).Value)));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.MeleeDamage, (scriptsLibrary, attributes, argument) => (int)(0.5 * ((Attributes)attributes).GetById(Attribute.Strength).Value)));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.PoisonResistance, (scriptsLibrary, attributes, argument) => (5 * ((Attributes)attributes).GetById(Attribute.Endurance).Value) - 5));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.RadiationResistance, (scriptsLibrary, attributes, argument) => (2 * ((Attributes)attributes).GetById(Attribute.Endurance).Value) - 2));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.ReloadSpeed, (scriptsLibrary, attributes, argument) =>
            {
                float value = ((Attributes)attributes).GetById(Attribute.Agility).Value;
                return (int)(value > 5 ? 0.1 * (value - 5) : 0);
            }));

            scripts.Add(new Script(game.Player.Attributes, DerivedAttribute.SkillRate, (scriptsLibrary, attributes, argument) => (int)(10 + (0.5 * attributes.GetById(Attribute.Intelligence).Value))));

            scripts.Add(new Script(game.Player.Skills, DerivedAttribute.UnarmedDamage, (scriptsLibrary, skills, argument) => (int)(0.5 + (skills.GetById(Skill.Unarmed).Value / 20))));

            scripts.Add(new Script(game.Player.Perks, "addPerk", (scriptsLibrary, perks, perkName) =>
            {
                perks.Add(perkName);
                return null;
            }));

            scripts.Add(new Script(game.Player, "player", (scriptsLibrary, player, argument) =>
            {
                return scriptsLibrary.GetById("log").Execute(player);
            }));

            scripts.Add(new Script(null, "log", (_, __, argument) =>
            {
                System.Console.WriteLine(argument);

                return null;
            }));

            scripts.Add(new Script(game.Player, "calculateExperienceNeededForNextLevel", (scriptsLibrary, player, argument) =>
            {
                var level = ((CharacterAggregate)player).Level;
                return 25 * ((3 * level) + 2) * (level - 1);
            }));


            // TODO: As effects?
            scripts.Add(new Script(game.Player.Radiation, "handleRadiationLevel", (scriptsLibrary, player, radiationLevel) =>
            {
                if (radiationLevel < 150)
                {
                    // very nauseous
                    // No Effect 
                }
                else if (radiationLevel < 300)
                {
                    // slightly fatigued 
                    // Minor Radiation Poisoning
                    // -1 STR
                }
                else if (radiationLevel < 450)
                {
                    // vomiting does not stop
                    // Advanced Radiation Poisoning
                    // -1 STR
                    // -1 AGI
                }
                else if (radiationLevel < 600)
                {
                    // hair is falling out
                    // Critical Radiation Poisoning 
                    // -2 STR
                    // -1 END
                    // -2 AGI
                    // -5% HP

                }
                else if (radiationLevel < 1000)
                {
                    // skin is falling off
                    // Deadly Radiation Poisoning
                    // -4 STR
                    // -3 PER
                    // -3 END
                    // -3 CHA
                    // -1 INT
                    // -5 AGI
                    // -15% HP
                }
                else
                {
                    // intense agony, Fatal Radiation Poisoning
                    // -6 STR
                    // -5 PER
                    // -5 END
                    // -5 CHA
                    // -3 INT
                    // -6 AGI
                    // 24h to drop below 1000 or death
                }

                return null;
            }));
        }

        private static void InitializeSkillTranslations()
        {
            var skillsTranslations = new SkillTranslationRepository();

            skillsTranslations.Add(new BaseTranslation(Skill.Barter, "Barter", "Proficiency at trading and haggling. Also used to negotiate better quest rewards or occasionally as a bribe-like alternative to Speech"));

            skillsTranslations.Add(new BaseTranslation(Skill.EnergyWeapons, "Energy Weapons", "Proficiency at using energy-based weapons"));

            skillsTranslations.Add(new BaseTranslation(Skill.Explosives, "Explosives", "Proficiency at using explosive weaponry, disarming mines, and crafting explosives"));

            skillsTranslations.Add(new BaseTranslation(Skill.SmallGuns, "Small Guns", "Proficiency at using light weapons that fire standard ammunition"));

            skillsTranslations.Add(new BaseTranslation(Skill.BigGuns, "Big Guns", "Proficiency at using heavy weapons that fire standard ammunition"));

            skillsTranslations.Add(new BaseTranslation(Skill.Lockpick, "Lockpick", "Proficiency at picking locks"));

            skillsTranslations.Add(new BaseTranslation(Skill.Medicine, "Medicine", "Proficiency at using medical tools, drugs, and for crafting Doctor's Bags"));

            skillsTranslations.Add(new BaseTranslation(Skill.MeleeWeapons, "Melee Weapons", "Proficiency at using melee weapons"));

            skillsTranslations.Add(new BaseTranslation(Skill.Repair, "Repair", "Proficiency at repairing items and crafting items and ammunition"));

            skillsTranslations.Add(new BaseTranslation(Skill.Science, "Science", "Proficiency at hacking terminals, recycling energy ammunition at workbenches, crafting chems, and many dialog checks"));

            skillsTranslations.Add(new BaseTranslation(Skill.Sneak, "Sneak", "Proficiency at remaining undetected and stealing"));

            skillsTranslations.Add(new BaseTranslation(Skill.Speech, "Speech", "Proficiency at persuading others. Also used to negotiate for better quest rewards and to talk your way out of combat, convincing people to give up vital information and succeeding in multiple speech checks"));

            skillsTranslations.Add(new BaseTranslation(Skill.Survival, "Survival", "Proficiency at cooking, making poisons, and crafting \"natural\" equipment and consumables. Also yields increased benefits from food"));

            skillsTranslations.Add(new BaseTranslation(Skill.Unarmed, "Unarmed", "Proficiency at unarmed fighting"));
        }

        private static void InitializeCharacterReputationTitleTranslations()
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

        private static void InitializeReputationTranslationRepository()
        {
            var translations = new ReputationTranslationRepository();

            translations.Add(new BaseTranslation(Reputation.Neutral, "Neutral", "People don't know enough about you to form an opinion"));
            translations.Add(new BaseTranslation(Reputation.Accepted, "Accepted", "Folks have come to accept you for your helpful nature"));
            translations.Add(new BaseTranslation(Reputation.Liked, "Liked", "Enough news of your good works has been passed around that people like you"));
            translations.Add(new BaseTranslation(Reputation.Idolized, "Idolized", "Renowned for your extensive support and goodwill, you are idolized by the community"));

            translations.Add(new BaseTranslation(Reputation.Shunned, "Shunned", "You've left a poor impression on the community and may be shunned as a result"));
            translations.Add(new BaseTranslation(Reputation.Mixed, "Mixed", "A little bit good mixed with a little bit bad, people haven't figured you out yet"));
            translations.Add(new BaseTranslation(Reputation.SmilingTroublemaker, "Smiling Troublemaker", "People know you're good at heart even though you're occasionally a troublemaker"));
            translations.Add(new BaseTranslation(Reputation.GoodNaturedRascal, "Good-Natured Rascal", "Your reputation as a good-natured friend of the community manages to outshine your dark side"));

            translations.Add(new BaseTranslation(Reputation.Hated, "Hated", "Now that folks know you're bad, most people outright hate you"));
            translations.Add(new BaseTranslation(Reputation.SneeringPunk, "Sneering Punk", "Even though you've done some good for the community, people still think you're a punk"));
            translations.Add(new BaseTranslation(Reputation.Unpredictable, "Unpredictable", "No one's sure what to make of your unpredictable nature, but you've left a strong impression"));
            translations.Add(new BaseTranslation(Reputation.DarkHero, "Dark Hero", "Folks still think you're some kind of hero, but you sure can be nasty sometimes"));

            translations.Add(new BaseTranslation(Reputation.Vilified, "Vilified", "For your overwhelmingly monstrous behavior, you have become vilified by the community"));
            translations.Add(new BaseTranslation(Reputation.MercifulThug, "Merciful Thug", "Despite your reputation as a thug, you are known to occasionally show a charitable side"));
            translations.Add(new BaseTranslation(Reputation.SoftHeartedDevil, "Soft-Hearted Devil", "Most people say you're the devil himself, but most admit you've also done a world of good"));
            translations.Add(new BaseTranslation(Reputation.WildChild, "Wild Child", "Your wild, seemingly capricious behavior leaves people scratching their heads in confusion and avoiding close contact"));
        }

        private static void InitializeKarmaTranslationsRepository()
        {
            var translations = new KarmaTranslationRepository();

            translations.Add(new KarmaTitleDescription(1, "Samaritan", "Drifter", "Grifter"));
            translations.Add(new KarmaTitleDescription(2, "Martyr", "Renegade", "Outlaw"));
            translations.Add(new KarmaTitleDescription(3, "Sentinel", "Seeker", "Opportunist"));
            translations.Add(new KarmaTitleDescription(4, "Defender", "Wanderer", "Plunderer"));
            translations.Add(new KarmaTitleDescription(5, "Dignitary", "Citizen", "Fat Cat"));
            translations.Add(new KarmaTitleDescription(6, "Peacekeeper", "Adventurer", "Marauder"));
            translations.Add(new KarmaTitleDescription(7, "Ranger of the Wastes", "Vagabond of the Wastes", "Pirate of the Wastes"));
            translations.Add(new KarmaTitleDescription(8, "Protector", "Mercenary", "Grifter"));
            translations.Add(new KarmaTitleDescription(9, "Desert Avenger", "Desert Scavenger", "Desert Terror"));
            translations.Add(new KarmaTitleDescription(10, "Exemplar", "Observer", "Ne'er-do-well"));

            translations.Add(new KarmaTitleDescription(11, "Vegas Crusader", "Vegas Councilor", "Vegas Crime lord"));
            translations.Add(new KarmaTitleDescription(12, "Paladin", "Keeper", "Defiler"));
            translations.Add(new KarmaTitleDescription(13, "Mojave Legend", "Mojave Myth", "Mojave Boogeyman"));
            translations.Add(new KarmaTitleDescription(14, "Shield of Hope", "Pinnacle of Survival", "Sword of Despair"));
            translations.Add(new KarmaTitleDescription(15, "Vegas Legend", "Vegas Myth", "Vegas Boogeyman"));
            translations.Add(new KarmaTitleDescription(16, "Hero of the Wastes", "Strider of the Wastes", "Villain of the Wastes"));
            translations.Add(new KarmaTitleDescription(17, "Paragon", "Beholder", "Fiend"));
            translations.Add(new KarmaTitleDescription(18, "Wasteland Savior", "Wasteland Watcher", "Wasteland Destroyer"));
            translations.Add(new KarmaTitleDescription(19, "Saint", "Super-Human", "Desert Terror"));
            translations.Add(new KarmaTitleDescription(20, "Guardian of the Wastes", "Renegade of the Wastes", "Scourge of the Wastes"));

            translations.Add(new KarmaTitleDescription(21, "Restorer of Faith", "Soldier of Fortune", "Architect of Doom"));
            translations.Add(new KarmaTitleDescription(22, "Model of Selflessness", "Profiteer", "Bringer of Sorrow"));
            translations.Add(new KarmaTitleDescription(23, "Shepherd", "Egocentric", "Deceiver"));
            translations.Add(new KarmaTitleDescription(24, "Friend of the People", "Loner", "Consort of Discord"));
            translations.Add(new KarmaTitleDescription(25, "Champion of Justice", "Hero for Hire", "Stuff of Nightmares"));
            translations.Add(new KarmaTitleDescription(26, "Symbol of Order", "Model of Apathy", "Agent of Chaos"));
            translations.Add(new KarmaTitleDescription(27, "Herald of Tranquility", "Person of Refinement", "Instrument of Ruin"));
            translations.Add(new KarmaTitleDescription(28, "Last, Best Hope of Humanity", "Moneygrubber", "Soultaker"));
            translations.Add(new KarmaTitleDescription(29, "Savior of the Damned", "Gray Stranger", "Demon's Spawn"));
            translations.Add(new KarmaTitleDescription(30, "Messiah", "True Mortal", "Devil"));
        }

        private static void InitializeAttributesTranslationsRepository()
        {
            var translations = new AttributeTranslationRepository();

            translations.Add(new AttributeTranslation(Attribute.Agility, "Agility", "A measure of your quickness and dexterity", new Dictionary<int, string>
            {
                [1] = "Walking Disaster",
                [2] = "Accident Prone",
                [3] = "Oaf",
                [4] = "Butterfingers",
                [5] = "Under Control",
                [6] = "Catlike",
                [7] = "Knife Thrower",
                [8] = "Knife Catcher",
                [9] = "Acrobatic Marvel",
                [10] = "Walks on Water"
            }));

            translations.Add(new AttributeTranslation(Attribute.Charisma, "Charisma", "Your overall attractiveness and likeability", new Dictionary<int, string>
            {
                [1] = "Misanthrope",
                [2] = "Old Hermit",
                [3] = "Creepy Undertaker",
                [4] = "Peevish Librarian",
                [5] = "Substitute Teacher",
                [6] = "Cheery Salesman",
                [7] = "Diplomat",
                [8] = "Movie Star",
                [9] = "Casanova",
                [10] = "Cult Leader"
            }));

            translations.Add(new AttributeTranslation(Attribute.Strength, "Strength", "Your overall attractiveness and likeability", new Dictionary<int, string>
            {
                [1] = "Wet Noodle",
                [2] = "Beached Jellyfish",
                [3] = "Doughy Baby",
                [4] = "Lightweight",
                [5] = "Average Joe",
                [6] = "Barrel Chested",
                [7] = "Beach Bully",
                [8] = "Circus Strongman",
                [9] = "Doomsday Pecs",
                [10] = "Hercules' Bigger Cousin"
            }));

            translations.Add(new AttributeTranslation(Attribute.Perception, "Perception", "How well you use your five senses, and also pertains to a \"sixth sense\"", new Dictionary<int, string>
            {
                [1] = "Deaf Bat",
                [2] = "Senile Mole",
                [3] = "Squinting Newt",
                [4] = "Unsuspecting Trout",
                [5] = "Wary Trout",
                [6] = "Alert Coyote",
                [7] = "Big-Eyed Tiger",
                [8] = "Monocled Falcon",
                [9] = "Sniper Hawk",
                [10] = "Eagle with Telescope"
            }));

            translations.Add(new AttributeTranslation(Attribute.Luck, "Luck", "How often good things happen to you by chance", new Dictionary<int, string>
            {
                [1] = "13 Pitch-Black Cats",
                [2] = "Broken Gypsy Mirror",
                [3] = "Sickly Albatross",
                [4] = "Spilled Salt",
                [5] = "Coin Flip",
                [6] = "Stacked Deck",
                [7] = "Lucky 7",
                [8] = "Leprechaun's Foot",
                [9] = "21 Leaf Clover",
                [10] = "Two-Headed Coin Flip"
            }));

            translations.Add(new AttributeTranslation(Attribute.Intelligence, "Intelligence", "Your basic intellect, curiosity in the world and adeptness at critical thinking", new Dictionary<int, string>
            {
                [1] = "Sub-Brick",
                [2] = "Vegetable",
                [3] = "Cretin",
                [4] = "Knuckle Head",
                [5] = "Knowledgeable",
                [6] = "Gifted",
                [7] = "Smartypants",
                [8] = "Know-It-All",
                [9] = "Genius",
                [10] = "Omniscient"
            }));

            translations.Add(new AttributeTranslation(Attribute.Endurance, "Endurance", "Your health and overall physical fitness", new Dictionary<int, string>
            {
                [1] = "Basically Dead",
                [2] = "Crumbly",
                [3] = "Do Not Bend",
                [4] = "Handle With Care",
                [5] = "Stain-Resistant",
                [6] = "Hardy",
                [7] = "Tough-as-nails",
                [8] = "Flame Retardant",
                [9] = "Bullet Proof",
                [10] = "Unstoppable"
            }));
        }

        private static void InitializeDerivedAttributesTranslationsRepository()
        {
            var translations = new DerivedAttributeTranslationRepository();

            translations.Add(new BaseTranslation(DerivedAttribute.ActionPoints, "Action points", "The higher the number, the more actions you can perform in a single V.A.T.S. round"));
            translations.Add(new BaseTranslation(DerivedAttribute.CarryWeight, "Carry Weight", "How much you can carry before you become overencumbered"));
            translations.Add(new BaseTranslation(DerivedAttribute.CompanionNerve, "Companion Nerve", "How much bonus damage and defense your companions receive"));
            translations.Add(new BaseTranslation(DerivedAttribute.CriticalChance, "Critical Chance", "Chance that a hit will inflict critical damage"));
            translations.Add(new BaseTranslation(DerivedAttribute.DamageResistance, "Damage Resistance", "Any damage taken is reduced by this percentage. It is applied before DT. Only a few rare non-player characters use DR"));
            translations.Add(new BaseTranslation(DerivedAttribute.DamageThreshold, "Damage Threshold", "This amount is subtracted from any damage taken"));
            translations.Add(new BaseTranslation(DerivedAttribute.Dehydration, "Dehydration", "A meter that will tell you if the player is dehydrated or hydrated. (Hardcore mode)"));
            translations.Add(new BaseTranslation(DerivedAttribute.Fatigue, "Fatigue", "How much special fatigue damage you can take before you are knocked unconscious"));
            translations.Add(new BaseTranslation(DerivedAttribute.FireResistance, "Fire Resistance", "All fire damage you receive is reduced by this percentage"));
            translations.Add(new BaseTranslation(DerivedAttribute.HitPoints, "Hit Points", "How much damage you can take before you die"));
            translations.Add(new BaseTranslation(DerivedAttribute.MeleeDamage, "Melee Damage", "Bonus damage with melee weapons"));
            translations.Add(new BaseTranslation(DerivedAttribute.PoisonResistance, "Poison Resistance", "All poison damage you receive is reduced by this percentage"));
            translations.Add(new BaseTranslation(DerivedAttribute.RadiationResistance, "Radiation Resistance", "How adept your body is at ignoring exposure to radiation"));
            translations.Add(new BaseTranslation(DerivedAttribute.ReloadSpeed, "Reload Speed", "The reduction of the amount of time taken to reload a weapon"));
            translations.Add(new BaseTranslation(DerivedAttribute.SkillRate, "Skill Rate", "How many skill points your character gains per level"));
            translations.Add(new BaseTranslation(DerivedAttribute.Starvation, "Starvation", "A meter that tells how hungry the player is. (Hardcore mode)"));
            translations.Add(new BaseTranslation(DerivedAttribute.UnarmedDamage, "Unarmed Damage", "Damage done with fists (damage of unarmed weapons is added to this value)"));
        }

        private static void InitializePerkRepository()
        {
            var perks = new PerkRepository();

            perks.Add(new Perk(Perk.BlackWidow, null));
            perks.Add(new Perk(Perk.LadyKiller, null));
        }
    }
}
