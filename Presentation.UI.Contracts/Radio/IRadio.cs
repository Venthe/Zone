using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    interface IRadio
    {
        ISet<IRadioStation> RadioStations { get; }
        void TuneTo();
    }
}
