using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IQuests
    {
        ISet<IQuest> PrimaryQuests { get; }
        ISet<IQuest> SecondaryQuests { get; }
    }
}
