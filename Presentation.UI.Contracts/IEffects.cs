using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IEffects
    {
        IList<ICharacterStatus> ActiveStatuses { get; }
    }
}
