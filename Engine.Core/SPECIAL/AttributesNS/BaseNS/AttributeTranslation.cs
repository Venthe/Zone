using System.Collections.Generic;

namespace Engine.Core.SPECIAL.AttributesNS.BaseNS
{
    public class AttributeTranslation : BaseTranslation
    {
        public IDictionary<int, string> RankDescription { get; set; }

        public AttributeTranslation(string id, string name, string description, IDictionary<int, string> rankDescription)
            : base(id, name, description)
        {
            RankDescription = rankDescription;
        }

        public new static AttributeTranslation Empty = new AttributeTranslation("", "", "", new Dictionary<int, string>());
    }
}
