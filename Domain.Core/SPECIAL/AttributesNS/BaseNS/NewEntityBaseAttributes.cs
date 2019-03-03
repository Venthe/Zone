//using System.Collections.Generic;
//using System.Linq;
//using Domain.Core.Utilities;

//namespace Domain.Core.Characters.Attributes.Base
//{
//    internal sealed class NewEntityBaseAttributes : AbstractBaseAttributes
//    {
//        private static readonly ILoggerService logger = new LoggerService(typeof(NewEntityBaseAttributes));

//        public NewEntityBaseAttributes(CharacterAggregate characterEntity)
//            : base(characterEntity)
//        {
//        }

//        public override AbstractBaseAttributes ChangeAttributes(IDictionary<BaseAttributeIdentifier, int> attributeChanges)
//        {
//            var totalAttributeChangePoints = (from attributeChange in attributeChanges select attributeChange.Value).Sum();
//            if (totalAttributeChangePoints != AttributePointsToBeDistributed)
//            {
//                logger.Log($"Attribute change total {totalAttributeChangePoints} is not equal to allowed {AttributePointsToBeDistributed}");
//                return this;
//            }

//            foreach (KeyValuePair<BaseAttributeIdentifier, int> attributeChange in attributeChanges)
//            {
//                GetAttribute(attributeChange.Key).BaseRank += attributeChange.Value;
//            }

//            return new LevelUpBaseAttributes(CharacterEntity, Attributes, 0);
//        }
//    }
//}
