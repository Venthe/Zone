namespace Presentation.UI.Contracts
{
    public interface ILocation
    {
        IPosition Position { get; }
        string Name { get; }
        void FastTravelTo(ILocation location);
        bool CanFastTravelTo();
    }
}
