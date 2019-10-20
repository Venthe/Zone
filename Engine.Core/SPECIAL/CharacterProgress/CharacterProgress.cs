using Engine.Core.Scripting;

namespace Engine.Core.SPECIAL {

    internal class CharacterProgress {
        private readonly IScriptRepository scriptRepository;

        public const int MaximumLevel = 30;
        private int _currentLevel = 1;

        public int Level {
            get => _currentLevel;
            private set {
                if (_currentLevel > MaximumLevel) {
                    return;
                }
                _currentLevel = value;
            }
        }

        private int _experience = 0;

        public int Experience {
            get => _experience;
            private set => _experience = value < 0 ? 0 : value;
        }

        public int ExperienceToNextLevel => (int) scriptRepository.GetById(Scripts.ExperienceToNextLevelScriptName).Execute();

        public void AddExperience(int amount) {
            var newExperience = _experience + amount;

            if (newExperience < ExperienceToNextLevel) {
                _experience = newExperience;
            } else {
                _experience = newExperience - ExperienceToNextLevel;
                Level++;
            }
        }
        public static class Scripts {
            public const string ExperienceToNextLevelScriptName = "calculateExperienceNeededForNextLevel";
        }
    }
}
