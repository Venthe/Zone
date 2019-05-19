using Engine.Core.SPECIAL;

namespace Engine.Core
{
    public class Game
    {
        public ICharacter Player { get; set; } = new CharacterAggregate();
    }
}
