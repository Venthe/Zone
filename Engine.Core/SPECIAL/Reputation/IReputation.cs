namespace Engine.Core.SPECIAL {
    using Engine.Core.Sharedkernel.Repositories;

    public interface Reputation : IAbstractEntity<string>, ITranslatedEntity<IBaseTranslation, string> {
        int Fame { get; set; }
        ReputationRank FameReputationRank { get; }
        int Infamy { get; set; }
        ReputationRank InfamyReputationRank { get; }
        string Level { get; }
        string ToString();
    }
}
