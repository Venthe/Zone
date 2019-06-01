using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IQuest
    {
        string Name { get; }
        string Description { get; }
        bool IsFinished();
        bool IsTracked();
        void Track();
        ISet<IQuestTask> QuestTasks { get; }
    }
}
