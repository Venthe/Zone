namespace Engine.Core.SPECIAL {
    using System;
    using Engine.Core.Sharedkernel.Utilities;

    internal class KarmaImpl : Karma {
        public const int MaxKarma = 1000;
        public const int MinKarma = -1000;
        private readonly ILoggerService Logger = new LoggerService(typeof(KarmaImpl));
        private readonly KarmaTranslationRepository translationRepository = new KarmaTranslationRepository();

        private int value;
        private readonly Chracter CharacterAggregate;

        public KarmaImpl(Chracter characterAggregate) {
            Value = 0;
            CharacterAggregate = characterAggregate;
        }

        public string Translation {
            get {
                var translation = translationRepository.GetById(CharacterAggregate.Level.Level);

                if (Classification.Equals(KarmaClassification.Bad, StringComparison.InvariantCulture)) {
                    return translation?.BadKarmaDescription ?? "";
                } else if (Classification.Equals(KarmaClassification.Good, StringComparison.InvariantCulture)) {
                    return translation?.GoodKarmaDescription ?? "";
                }

                return translation?.NeutralKarmaDescription ?? "";
            }
        }

        public string Classification {
            get {
                switch (Level) {
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

        public string Level {
            get {
                if (Value <= -750) {
                    return KarmaLevel.VeryEvil;
                } else if (Value >= 750) {
                    return KarmaLevel.VeryGood;
                } else if (Value <= 749 && Value >= 250) {
                    return KarmaLevel.Good;
                } else if (Value >= -749 && Value <= -250) {
                    return KarmaLevel.Evil;
                } else {
                    return KarmaLevel.Neutral;
                }
            }
        }

        public int Value {
            get => value;
            set {
                if (value > MaxKarma) {
                    Logger.Log($"Karma cannot exceed {MaxKarma}");
                } else if (value < MinKarma) {
                    Logger.Log($"Karma cannot fall below {MinKarma}");
                } else {
                    this.value = value;
                }
            }
        }
    }
}
