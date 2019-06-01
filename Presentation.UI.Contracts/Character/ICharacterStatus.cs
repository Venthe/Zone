using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface ICharacterStatus
    {
        IImage Icon { get; }
        string Name { get; }
        ISet<IStatusModifier> StatusModifiers { get; }
        int TimeLeft { get; }
        // Well fed? Status related to other parameters?
    }
}
