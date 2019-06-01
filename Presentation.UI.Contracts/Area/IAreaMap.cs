using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IAreaMap
    {
        ISet<ILocation> Locations { get; }
        void PlaceMarker(IMousePosition mouse);
    }
}
