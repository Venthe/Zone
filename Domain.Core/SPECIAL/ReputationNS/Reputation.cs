using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.ReputationNS
{
    // TODO: Add reputation per faction
    public class Reputation : AbstractEntity<string>, ITranslatedEntity<IBaseTranslation, string>
    {
        public const string Neutral = "Neutral";
        public const string Accepted = "Accepted";
        public const string Liked = "Liked";
        public const string Idolized = "Idolized";

        public const string Shunned = "Shunned";
        public const string Mixed = "Mixed";
        public const string SmilingTroublemaker = "SmilingTroublemaker";
        public const string GoodNaturedRascal = "GoodNaturedRascal";

        public const string Hated = "Hated";
        public const string SneeringPunk = "SneeringPunk";
        public const string Unpredictable = "Unpredictable";
        public const string DarkHero = "DarkHero";

        public const string Vilified = "Vilified";
        public const string MercifulThug = "MercifulThug";
        public const string SoftHeartedDevil = "SoftHeartedDevil";
        public const string WildChild = "WildChild";

        private ReputationTranslationRepository reputationTranslationRepository = new ReputationTranslationRepository();

        // This should be per faction/city
        private int[] reputationRange = new int[3] { 15, 50, 100 };

        public IBaseTranslation Translation => reputationTranslationRepository.GetById(GetIdFromReputationRank());

        // Can only increase in normal situations
        public int Fame { get; set; } = 0;
        public int Infamy { get; set; } = 0;

        public ReputationRank FameReputationRank => GetReputationRank(Fame);
        public ReputationRank InfamyReputationRank => GetReputationRank(Infamy);

        public string Level
        {
            get {
                if (FameReputationRank.Equals(InfamyReputationRank) || ((int)FameReputationRank >= 3 && (int)InfamyReputationRank >= 3))
                {
                    return ReputationLevel.Neutral;
                }

                return (int)FameReputationRank - (int)InfamyReputationRank < 0 ? ReputationLevel.Negative : ReputationLevel.Positive;
            }
        }

        private string GetIdFromReputationRank()
        {
            var fameRank = FameReputationRank;
            var infamyRank = InfamyReputationRank;

            if (infamyRank == ReputationRank.Rank1)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return Neutral;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return Accepted;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return Liked;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return Idolized;
                }
            }
            else if (infamyRank == ReputationRank.Rank2)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return Shunned;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return Mixed;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return SmilingTroublemaker;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return GoodNaturedRascal;
                }
            }
            else if (infamyRank == ReputationRank.Rank3)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return Hated;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return SneeringPunk;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return Unpredictable;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return DarkHero;
                }
            }
            else if (infamyRank == ReputationRank.Rank4)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return Vilified;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return MercifulThug;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return SoftHeartedDevil;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return WildChild;
                }
            }

            return Neutral;
        }

        private ReputationRank GetReputationRank(int value)
        {
            if (value < reputationRange[0])
            {
                return ReputationRank.Rank1;
            }
            else if (value < reputationRange[1])
            {
                return ReputationRank.Rank2;
            }
            else if (value < reputationRange[2])
            {
                return ReputationRank.Rank3;
            }

            return ReputationRank.Rank4;
        }

        public override string ToString() => $"[{Translation.Name}:{Level}], {FameReputationRank}:{Fame}, {InfamyReputationRank}:{Infamy}\n  {Translation.Description}";

        public enum ReputationRank
        {
            Rank1 = 1,
            Rank2 = 2,
            Rank3 = 3,
            Rank4 = 4,
        }
    }
}
