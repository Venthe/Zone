namespace Presentation.UI.Contracts
{
    public interface IAreaRadiation
    {
        int RadsPerSecond { get; }
        bool IsRadiationPresent { get; }
    }
}
