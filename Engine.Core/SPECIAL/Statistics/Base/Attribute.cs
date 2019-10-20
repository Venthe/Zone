namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;
    using Engine.Core.Sharedkernel.Utilities;

    public class Attribute : AbstractAttribute<int, AttributeTranslation> {
        public const string Strength = "Strength";
        public const string Perception = "Perception";
        public const string Endurance = "Endurance";
        public const string Charisma = "Charisma";
        public const string Intelligence = "Intelligence";
        public const string Agility = "Agility";
        public const string Luck = "Luck";

        private const int InitialBaseRank = 5;
        private const int MaximumAttributeValue = 10;
        private const int MinimumAttributeValue = 1;

        private static readonly ILoggerService Logger = new LoggerService(typeof(Attribute));
        private readonly IReadOnlyRepository<AttributeTranslation, string> translations = new AttributeTranslationRepository();

        private int baseValue;

        public Attribute(string id) {
            baseValue = InitialBaseRank;
            Id = id;
        }

        public int BaseRank {
            get => baseValue;
            set {
                if (value < MinimumAttributeValue) {
                    Logger.Log($"{value} requested change in a base value is less than {MinimumAttributeValue}");
                    return;
                } else if (value > MaximumAttributeValue) {
                    Logger.Log($"{value} requested change in a base value is greater than {MaximumAttributeValue}");
                    return;
                }

                baseValue = value;
            }
        }

        public int TemporaryRankModifier { get; set; } = 0;

        public override int Value => BaseRank + TemporaryRankModifier < MinimumAttributeValue ? MinimumAttributeValue : BaseRank + TemporaryRankModifier;

        public override AttributeTranslation Translation => translations.GetById(Id);
    }
}
