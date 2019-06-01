using System;
using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IStatus
    {
        string PlayerName { get; }
        IExperienceLevel Experience { get; }
        IList<ICharacterStatus> ActiveStatuses { get; }
        ISet<ILimbStatus> LimbStatuses { get; }
    }
}
