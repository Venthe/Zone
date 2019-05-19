using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.ReputationNS
{
    // TODO: Add reputation per faction
    internal class Reputation : AbstractEntity<string>, IReputation
    {        private readonly ReputationTranslationRepository reputationTranslationRepository = new ReputationTranslationRepository();

        // This should be per faction/city
        private readonly int[] reputationRange = new int[3] { 15, 50, 100 };

        public IBaseTranslation Translation => reputationTranslationRepository.GetById(GetIdFromReputationRank());

        // Can only increase in normal situations
        public int Fame { get; set; } = 0;
        public int Infamy { get; set; } = 0;

        public ReputationRank FameReputationRank => GetReputationRank(Fame);
        public ReputationRank InfamyReputationRank => GetReputationRank(Infamy);

        public string Level => IsReputationRankNeutral() ? ReputationLevel.Neutral : CalculateReputatinLevel();

        private bool IsReputationRankNeutral() => FameReputationRank.Equals(InfamyReputationRank) || ((int)FameReputationRank >= 3 && (int)InfamyReputationRank >= 3);
        private string CalculateReputatinLevel() => (int)FameReputationRank - (int)InfamyReputationRank < 0 ? ReputationLevel.Negative : ReputationLevel.Positive;

        private string GetIdFromReputationRank()
        {
            var fameRank = FameReputationRank;
            var infamyRank = InfamyReputationRank;

            if (infamyRank == ReputationRank.Rank1)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return ReputationLabel.Neutral;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return ReputationLabel.Accepted;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return ReputationLabel.Liked;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return ReputationLabel.Idolized;
                }
            }
            else if (infamyRank == ReputationRank.Rank2)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return ReputationLabel.Shunned;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return ReputationLabel.Mixed;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return ReputationLabel.SmilingTroublemaker;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return ReputationLabel.GoodNaturedRascal;
                }
            }
            else if (infamyRank == ReputationRank.Rank3)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return ReputationLabel.Hated;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return ReputationLabel.SneeringPunk;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return ReputationLabel.Unpredictable;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return ReputationLabel.DarkHero;
                }
            }
            else if (infamyRank == ReputationRank.Rank4)
            {
                if (fameRank == ReputationRank.Rank1)
                {
                    return ReputationLabel.Vilified;
                }
                else if (fameRank == ReputationRank.Rank2)
                {
                    return ReputationLabel.MercifulThug;
                }
                else if (fameRank == ReputationRank.Rank3)
                {
                    return ReputationLabel.SoftHeartedDevil;
                }
                else if (fameRank == ReputationRank.Rank4)
                {
                    return ReputationLabel.WildChild;
                }
            }

            return ReputationLabel.Neutral;
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
    }
}
