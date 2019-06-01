using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IRadar
    {
        ISet<ILocation> Locations { get; }
        float Direction { get; }
    }
}
