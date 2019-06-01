using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IDialogue
    {
        ISet<IDialogueLine> DialogueLines { get; }
    }
}
