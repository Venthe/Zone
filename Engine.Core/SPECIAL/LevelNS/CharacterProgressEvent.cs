namespace Engine.Core.SPECIAL.LevelNS
{
    public static class CharacterProgressEvent
    {
        public delegate void LevelUp(int currentLevel);
        public delegate void ExperienceGained(int experience);
    }
}
