using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.PerksNS
{
    public class Perk : AbstractEntity<string>, ITranslatedEntity<IBaseTranslation, string>
    {
        #region Identifiers
        // Regular
        public const string BlackWidow = "BlackWidow";
        public const string LadyKiller = "LadyKiller";
        public const string CherchezLaFemme = "CherchezLaFemme";
        public const string ConfirmedBachelor = "ConfirmedBachelor";
        public const string FriendOfTheNight = "FriendOfTheNight";
        public const string HeaveHo = "HeaveHo";
        public const string Hunter = "Hunter";
        public const string IntenseTraining = "IntenseTraining";
        public const string RapidReload = "RapidReload";
        public const string Retention = "Retention";
        public const string SwiftLearner = "SwiftLearner";
        public const string Cannibal = "Cannibal";
        public const string Comprehension = "Comprehension";
        public const string Educated = "Educated";
        public const string Entomologist = "Entomologist";
        public const string RadChild = "RadChild";
        public const string RunNGun = "RunNGun";
        public const string TravelLight = "TravelLight";
        public const string BloodyMess = "BloodyMess";
        public const string DemolitionExpert = "DemolitionExpert";
        public const string FerociousLoyalty = "FerociousLoyalty";
        public const string FortuneFinder = "FortuneFinder";
        public const string Gunslinger = "Gunslinger";
        public const string HandLoader = "HandLoader";
        public const string LeadBelly = "LeadBelly";
        public const string ShotgunSurgeon = "ShotgunSurgeon";
        public const string TheProfessional = "TheProfessional";
        public const string Toughness = "Toughness";
        public const string VigilantRecycler = "VigilantRecycler";
        public const string Commando = "Commando";
        public const string Cowboy = "Cowboy";
        public const string LivingAnatomy = "LivingAnatomy";
        public const string PackRat = "PackRat";
        public const string QuickDraw = "QuickDraw";
        public const string RadResistance = "RadResistance";
        public const string Scrounger = "Scrounger";
        public const string Stonewall = "Stonewall";
        public const string StrongBack = "StrongBack";
        public const string SuperSlam = "SuperSlam";
        public const string TerrifyingPresence = "TerrifyingPresence";
        public const string HereAndNow = "HereAndNow";
        public const string AnimalFriend = "AnimalFriend";
        public const string Finesse = "Finesse";
        public const string MathWrath = "MathWrath";
        public const string MissFortune = "MissFortune";
        public const string MisterSandman = "MisterSandman";
        public const string MysteriousStranger = "MysteriousStranger";
        public const string NerdRage = "NerdRage";
        public const string NightPerson = "NightPerson";
        public const string PlasmaSpaz = "PlasmaSpaz";
        public const string FastMetabolism = "FastMetabolism";
        public const string GhastlyScavenger = "GhastlyScavenger";
        public const string HitTheDeck = "HitTheDeck";
        public const string LifeGiver = "LifeGiver";
        public const string LongHaul = "LongHaul";
        public const string PiercingStrike = "PiercingStrike";
        public const string Pyromaniac = "Pyromaniac";
        public const string RoboticsExpert = "RoboticsExpert";
        public const string SilentRunning = "SilentRunning";
        public const string Sniper = "Sniper";
        public const string SplashDamage = "SplashDamage";
        public const string UnstoppableForce = "UnstoppableForce";
        public const string AdamantiumSkeleton = "AdamantiumSkeleton";
        public const string CenterOfMass = "CenterOfMass";
        public const string Chemist = "Chemist";
        public const string JuryRigging = "JuryRigging";
        public const string LightStep = "LightStep";
        public const string Purifier = "Purifier";
        public const string ActionBoy = "ActionBoy";
        public const string ActionGirl = "ActionGirl";
        public const string BetterCriticals = "BetterCriticals";
        public const string ChemResistant = "ChemResistant";
        public const string Meltdown = "Meltdown";
        public const string Tag = "Tag";
        public const string WeaponHandling = "WeaponHandling";
        public const string ComputerWhiz = "ComputerWhiz";
        public const string ConcentratedFire = "ConcentratedFire";
        public const string Infiltrator = "Infiltrator";
        public const string ParalyzingPalm = "ParalyzingPalm";
        public const string Explorer = "Explorer";
        public const string GrimReapersSprint = "GrimReapersSprint";
        public const string Ninja = "Ninja";
        public const string SolarPowered = "SolarPowered";
        public const string LaserCommander = "LaserCommander";
        public const string NukaChemist = "NukaChemist";
        public const string SprayAndPray = "SprayAndPray";
        public const string Slayer = "Slayer";
        public const string NervesOfSteel = "NervesOfSteel";
        public const string RadAbsorption = "RadAbsorption";

        // Companion
        public const string BetterHealing = "BetterHealing";
        public const string EnhancedSensors = "EnhancedSensors";
        public const string RegularMaintenance = "RegularMaintenance";
        public const string FullMaintenance = "FullMaintenance";
        public const string ScribeAssistant = "ScribeAssistant";
        public const string SearchAndMark = "SearchAndMark";
        public const string Spotter = "Spotter";
        public const string StealthGirl = "StealthGirl";
        public const string WhiskeyRose = "WhiskeyRose";

        // Special
        public const string Abominable = "Abominable";
        public const string AnimalControl = "AnimalControl";
        public const string BeautifulBeatdown = "BeautifulBeatdown";
        public const string BugStomper = "BugStomper";
        public const string CamelOfTheMojave = "CamelOfTheMojave";
        public const string DayTripper = "DayTripper";
        public const string DineAndDash = "DineAndDash";
        public const string FastTimes = "FastTimes";
        public const string FreeRadical = "FreeRadical";
        public const string FriendlyHelp = "FriendlyHelp";
        public const string LordDeath = "LordDeath";
        public const string MachineHead = "MachineHead";
        public const string MeatOfChampions = "MeatOfChampions";
        public const string MeleeHacker = "MeleeHacker";
        public const string MutantMassacrer = "MutantMassacrer";
        public const string PowerArmorTraining = "PowerArmorTraining";
        public const string SetLasersForFun = "SetLasersForFun";
        public const string ToughGuy = "ToughGuy";

        // Implant
        public const string AgilityImplant = "AgilityImplant";
        public const string CharismaImplant = "CharismaImplant";
        public const string EnduranceImplant = "EnduranceImplant";
        public const string IntelligenceImplant = "IntelligenceImplant";
        public const string LuckImplant = "LuckImplant";
        public const string MonocyteBreeder = "MonocyteBreeder";
        public const string PerceptionImplant = "PerceptionImplant";
        public const string StrengthImplant = "StrengthImplant";
        public const string SubDermalArmor = "SubDermalArmor";

        // Unarmed
        public const string KhanTrick = "KhanTrick";
        public const string LegionAssault = "LegionAssault";
        public const string RangerTakedown = "RangerTakedown";
        public const string ScribeCounter = "ScribeCounter";

        // Dead Money; Regular
        public const string InShiningArmor = "InShiningArmor";
        public const string JunkRounds = "JunkRounds";
        public const string LightTouch = "LightTouch";
        public const string OldWorldGourmet = "OldWorldGourmet";
        public const string AndStayBack = "AndStayBack";
        public const string Heavyweight = "Heavyweight";
        public const string Hobbler = "Hobbler";

        // Dead Money; Companion
        public const string InMyFootsteps = "InMyFootsteps";
        public const string RavenousHunger = "RavenousHunger";
        public const string SignalInterference = "SignalInterference";
        public const string UncleanLiving = "UncleanLiving";

        // Dead Money; Special
        public const string CoinOperator = "CoinOperator";
        public const string GhostHunter = "GhostHunter";
        public const string SierraMadreMartini = "SierraMadreMartini";
        public const string ElijahsLastWords = "ElijahsLastWords";
        public const string ElijahsRamblings = "ElijahsRamblings";

        // Honest Hearts; Regular
        public const string EyeForEye = "EyeForEye";
        public const string FightThePower = "FightThePower";
        public const string Grunt = "Grunt";
        public const string HomeOnTheRange = "HomeOnTheRange";
        public const string SneeringImperialist = "SneeringImperialist";
        public const string TribalWisdom = "TribalWisdom";

        // Honest Hearts; Companion perks
        public const string QuietAsTheWaters = "QuietAsTheWaters";
        public const string TheWayOftheCanaanite = "TheWayOftheCanaanite";
        public const string WellStackedCairns = "WellStackedCairns";

        // Old World Blues; Regular
        public const string Atomic = "";
        public const string MileInTheirShoes = "";
        public const string ThemsGoodEatin = "";
        public const string ImplantGRX = "";

        // Old World Blues; Special
        public const string Brainless = "";
        public const string Heartless = "";
        public const string Spineless = "";
        public const string BigBrained = "";
        public const string CardiacArrest = "";
        public const string ReinforcedSpine = "";
        public const string DNAgent = "";
        public const string DNAvenger = "";

        // Old World Blues; Implant
        public const string ImplantC13 = "";
        public const string ImplantM5 = "";
        public const string ImplantY3 = "";
        public const string ImplantY7 = "";

        // Lonesome Road; Regular
        public const string AintLikeThatNow = "";
        public const string Alertness = "";
        public const string BroadDaylight = "";
        public const string BurdenToBear = "";
        public const string CertifiedTech = "";
        public const string IrradiatedBeauty = "";
        public const string JustLuckyImAlive = "";
        public const string LessonsLearned = "";
        public const string RoughinIt = "";
        public const string ThoughtYouDied = "";
        public const string TunnelRunner = "";
        public const string VoraciousReader = "";
        public const string WalkerInstinct = "";

        // Lonesome Road; Special
        public const string TheBearSlayer = "";
        public const string DeadMansBurden = "";
        public const string DivideSurvivor = "";
        public const string LonesomeRoad = "";
        public const string Marked = "";
        public const string ScourgeOfTheEast = "";

        // Lonesome Road; Companion
        public const string CamaraderE = "";
        #endregion Identifiers

        #region Types
        public const string Regular = "Regular";
        public const string Companion = "Companion";
        public const string Special = "Special";
        public const string Implant = "Implant";
        public const string Unarmed = "Unarmed";
        #endregion Type

        private readonly IReadOnlyRepository<IBaseTranslation, string> translations = new PerkTranslationRepository();

        public Perk(string id, Script requirements)
        {
            Id = id;
            Requirements = requirements;
        }

        public IBaseTranslation Translation => translations.GetById(Id);
        public Script Requirements { get; set; }
        public int Rank { get; set; } = 0;

        public override string ToString() => $"[{Id}:{Translation?.Name}]\n  {Translation?.Description}";
    }
}
