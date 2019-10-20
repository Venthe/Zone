namespace Engine.Core.Initializer.Translations
{
    using System.Collections.Generic;
    using Engine.Core.SPECIAL.AttributesNS.BaseNS;
    using Attribute = Engine.Core.SPECIAL.AttributesNS.BaseNS.Attribute;

    class AttributesTranslationsInitializer : IInitializer
    {
        public void Initialize(ref Game game)
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
    }
}
