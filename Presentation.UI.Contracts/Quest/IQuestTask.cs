namespace Presentation.UI.Contracts
{
    public interface IQuestTask
    {
        string Description { get; }
        bool IsFinished();
        int Current { get; }
        int Max { get; }
    }
}
