using Engine.Core.Scripting;

namespace Engine.Core.SPECIAL
{
    public class Experience
    {
        private readonly ScriptRepository scriptRepository;

        public Experience()
        {
            scriptRepository = new ScriptRepository();
        }

        public const int MaxLevel = 30;

        public int Level { get; } = 1;
        public int CurrentExperience { get; } = 0;
        public object RemainingExperienceToNextLevel => scriptRepository.GetById("calculateExperienceNeededForNextLevel").Execute();

        public override string ToString() => $"{CurrentExperience}/{RemainingExperienceToNextLevel} {Level}/{MaxLevel}";
    }
}
