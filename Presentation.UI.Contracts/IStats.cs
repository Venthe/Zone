namespace Presentation.UI.Contracts
{
    interface IStats
    {
        IStatus Status { get; }
        IEffects Effects { get; }
        ISpecial Special { get; }
    }
}
