using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.SkillsNS
{
    public interface ISkills : IReadOnlyRepository<Skill, string>
    {
        void TagSkill(string characterSkillIdentifier);
        string ToString();
    }
}
