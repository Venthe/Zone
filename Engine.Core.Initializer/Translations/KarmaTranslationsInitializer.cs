namespace Engine.Core.Initializer.Translations
{
    using Engine.Core.SPECIAL.KarmaNS;

    class KarmaTranslationsInitializer : IInitializer
    {
        public void Initialize(ref Game game)
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
    }
}
