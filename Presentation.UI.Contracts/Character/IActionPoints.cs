namespace Presentation.UI.Contracts
{
    public interface IActionPoints
    {
        int Current { get; }
        int NeededToNextLevel { get; }
    }
}
