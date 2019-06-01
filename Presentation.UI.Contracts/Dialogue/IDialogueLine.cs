using System;

namespace Presentation.UI.Contracts
{
    public interface IDialogueLine
    {
        void PickLine();
        bool IsSkillCheck { get; }
        ISkillCheckLevel SkillCheckLevel { get; }
        string LineSummary { get; }
    }
}
