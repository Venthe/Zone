using Engine.Core.Sharedkernel.Utilities;

namespace Engine.Core.SPECIAL.KarmaNS
{
    public class Karma: ITranslation<string>
    {
        public const int MaxKarma = 1000;
        public const int MinKarma = -1000;
        private readonly ILoggerService Logger = new LoggerService(typeof(Karma));
        private readonly KarmaTranslationRepository translationRepository = new KarmaTranslationRepository();

        private int value;
        private CharacterAggregate CharacterAggregate;

        public Karma(CharacterAggregate characterAggregate)
        {
            Value = 0;
            CharacterAggregate = characterAggregate;
        }

        public string Translation
        {
            get {
                var translation = translationRepository.GetById(CharacterAggregate.Level);

                if (Classification.Equals(KarmaClassification.Bad))
                {
                    return translation?.BadKarmaDescription ?? "";
                }
                else if (Classification.Equals(KarmaClassification.Good))
                {
                    return translation?.GoodKarmaDescription ?? "";
                }

                return translation?.NeutralKarmaDescription ?? "";
            }
        }

        public string Classification
        {
            get {
                switch (Level)
                {
                    case KarmaLevel.Good:
                    case KarmaLevel.VeryGood:
                        return KarmaClassification.Good;
                    case KarmaLevel.Evil:
                    case KarmaLevel.VeryEvil:
                        return KarmaClassification.Bad;
                    default:
                        return KarmaClassification.Neutral;
                }
            }
        }


        public string Level
        {
            get {
                if (Value <= -750)
                {
                    return KarmaLevel.VeryEvil;
                }
                else if (Value >= 750)
                {
                    return KarmaLevel.VeryGood;
                }
                else if (Value <= 749 && Value >= 250)
                {
                    return KarmaLevel.Good;
                }
                else if (Value >= -749 && Value <= -250)
                {
                    return KarmaLevel.Evil;
                }
                else
                {
                    return KarmaLevel.Neutral;
                }
            }
        }

        public int Value
        {
            get => value;
            set {
                if (value > MaxKarma)
                {
                    Logger.Log($"Karma cannot exceed {MaxKarma}");
                }
                else if (value < MinKarma)
                {
                    Logger.Log($"Karma cannot fall below {MinKarma}");
                }
                else
                {
                    this.value = value;
                }
            }
        }

        public override string ToString() => $"[{Value}, {Level} (Classified as {Classification})] {Translation}";
    }
}
