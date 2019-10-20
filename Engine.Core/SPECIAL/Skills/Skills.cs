namespace Engine.Core.SPECIAL {
    using System.Collections.Generic;
    using System.Linq;
    using Engine.Core.Sharedkernel.Utilities;

    internal class Skills {
        private const int MaxTagSkills = 3;

        private static readonly ILoggerService Logger = new LoggerService(typeof(Skills));

        private readonly IReadOnlyRepository<Skill, string> skills;

        public Skills(Chracter characterAggregate) {
            IDictionary<string, Skill> skills = new Dictionary<string, Skill> {
                [Skill.Barter] = new Skill(Skill.Barter, characterAggregate.Attributes.GetById(Attribute.Charisma)),
                [Skill.EnergyWeapons] = new Skill(Skill.EnergyWeapons, characterAggregate.Attributes.GetById(Attribute.Perception)),
                [Skill.Explosives] = new Skill(Skill.Explosives, characterAggregate.Attributes.GetById(Attribute.Perception)),
                [Skill.BigGuns] = new Skill(Skill.BigGuns, characterAggregate.Attributes.GetById(Attribute.Agility)),
                [Skill.SmallGuns] = new Skill(Skill.SmallGuns, characterAggregate.Attributes.GetById(Attribute.Agility)),
                [Skill.Lockpick] = new Skill(Skill.Lockpick, characterAggregate.Attributes.GetById(Attribute.Perception)),
                [Skill.Medicine] = new Skill(Skill.Medicine, characterAggregate.Attributes.GetById(Attribute.Intelligence)),
                [Skill.MeleeWeapons] = new Skill(Skill.MeleeWeapons, characterAggregate.Attributes.GetById(Attribute.Strength)),
                [Skill.Repair] = new Skill(Skill.Repair, characterAggregate.Attributes.GetById(Attribute.Intelligence)),
                [Skill.Science] = new Skill(Skill.Science, characterAggregate.Attributes.GetById(Attribute.Intelligence)),
                [Skill.Sneak] = new Skill(Skill.Sneak, characterAggregate.Attributes.GetById(Attribute.Agility)),
                [Skill.Speech] = new Skill(Skill.Speech, characterAggregate.Attributes.GetById(Attribute.Charisma)),
                [Skill.Survival] = new Skill(Skill.Survival, characterAggregate.Attributes.GetById(Attribute.Endurance)),
                [Skill.Unarmed] = new Skill(Skill.Unarmed, characterAggregate.Attributes.GetById(Attribute.Endurance))
            };

            this.skills = new InMemoryRepository<Skill, string>(skills);
        }

        public void TagSkill(string characterSkillIdentifier) {
            var taggedSkills = (from skill in skills.List() select skill.IsTagged ? 1 : 0).Sum();

            if (taggedSkills > MaxTagSkills) {
                Logger.Log($"You cannot have more than {MaxTagSkills} tag skills");
                return;
            }

            (from skill in skills.List() where skill.Equals(characterSkillIdentifier) select skill).First().IsTagged = true;
        }

        public Skill GetById(string id) => skills.GetById(id);
        public IEnumerable<Skill> List() => skills.List();
        public IEnumerable<Skill> List(System.Func<Skill, bool> predicate) => skills.List(predicate);
    }
}
