using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.ReputationNS
{
    public interface IReputation: IAbstractEntity<string>, ITranslatedEntity<IBaseTranslation, string>
    {
        int Fame { get; set; }
        ReputationRank FameReputationRank { get; }
        int Infamy { get; set; }
        ReputationRank InfamyReputationRank { get; }
        string Level { get; }
        string ToString();
    }
}
