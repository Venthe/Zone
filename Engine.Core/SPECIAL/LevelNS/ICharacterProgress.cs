using static Engine.Core.SPECIAL.LevelNS.CharacterProgressEvent;

namespace Engine.Core.SPECIAL.LevelNS
{
    public interface ICharacterProgress
    {
        int Level { get; }
        int Experience { get; }
        int ExperienceToNextLevel { get; }

        event ExperienceGained ExperienceGainedEvent;
        event LevelUp LevelUpEvent;

        void AddExperience(int amount);
        string ToString();
    }
}
