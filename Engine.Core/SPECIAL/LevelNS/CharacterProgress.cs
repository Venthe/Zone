using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Utilities;
using static Engine.Core.SPECIAL.LevelNS.CharacterProgressEvent;

namespace Engine.Core.SPECIAL.LevelNS
{
    internal class CharacterProgress : ICharacterProgress
    {
        private static readonly ILoggerService Logger = new LoggerService(typeof(CharacterProgress));
        public event LevelUp LevelUpEvent;
        public event ExperienceGained ExperienceGainedEvent;
        private readonly ScriptRepository scriptRepository;

        public const int MaximumLevel = 30;

        private int _currentLevel = 1;

        public int Level
        {
            get => _currentLevel;
            private set {
                if (_currentLevel > MaximumLevel)
                {
                    return;
                }
                _currentLevel = value;
                LevelUpEvent?.Invoke(value);
            }
        }

        private int _experience = 0;

        public int Experience
        {
            get => _experience;
            private set => _experience = value < 0 ? 0 : value;
        }

        public int ExperienceToNextLevel => (int)scriptRepository.GetById(CharacterProgressLabel.ExperienceToNextLevelScriptName).Execute();

        public CharacterProgress()
        {
            scriptRepository = new ScriptRepository();
        }

        public void AddExperience(int amount)
        {
            Logger.Log($"Experience gained: {amount}");
            var newExperience = _experience + amount;

            if (newExperience < ExperienceToNextLevel)
            {
                _experience = newExperience;
            }
            else
            {
                _experience = newExperience - ExperienceToNextLevel;
                Level++;
            }
            ExperienceGainedEvent?.Invoke(amount);
        }
    }
}
