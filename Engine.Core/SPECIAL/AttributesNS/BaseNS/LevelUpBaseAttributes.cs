//using System.Collections.Generic;
//using System.Linq;
//using Domain.Core.Utilities;

//namespace Domain.Core.Characters.Attributes.Base
//{
//    internal sealed class LevelUpBaseAttributes : AbstractBaseAttributes
//    {
//        private static readonly ILoggerService logger = new LoggerService(typeof(LevelUpBaseAttributes));

//        public LevelUpBaseAttributes(CharacterAggregate characterEntity, ISet<Attribute> attributes, int pointsToBeDistributed)
//            : base(characterEntity, attributes, pointsToBeDistributed)
//        {
//        }

//        public override AbstractBaseAttributes ChangeAttributes(IDictionary<BaseAttributeIdentifier, int> attributeChanges)
//        {
//            var totalAttributeChangePoints = (from attributeChange in attributeChanges select attributeChange.Value).Sum();
//            if (totalAttributeChangePoints != AttributePointsToBeDistributed)
//            {
//                logger.Log("You cannot change attributes more than allowed.");
//                return this;
//            }

//            foreach (KeyValuePair<BaseAttributeIdentifier, int> attributeChange in attributeChanges)
//            {
//                if (attributeChange.Value < 0)
//                {
//                    logger.Log("You cannot reduce attributes during level up.");
//                    return this;
//                }
//            }

//            foreach (KeyValuePair<BaseAttributeIdentifier, int> attributeChange in attributeChanges)
//            {
//                GetAttribute(attributeChange.Key).BaseRank += attributeChange.Value;
//            }

//            return new LevelUpBaseAttributes(CharacterEntity, Attributes, 0);
//        }
//    }
//}
