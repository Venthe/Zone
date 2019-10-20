namespace Engine.Core.SPECIAL {
    using System.Collections.Generic;

    public class AttributeTranslation : BaseTranslation {
        public IDictionary<int, string> RankDescription { get; }

        public AttributeTranslation(string id, string name, string description, IDictionary<int, string> rankDescription)
            : base(id, name, description) => RankDescription = rankDescription;

        public readonly new static AttributeTranslation Empty = new AttributeTranslation("", "", "", new Dictionary<int, string>());
    }
}
