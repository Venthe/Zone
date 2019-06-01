using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface IStatusModifier
    {
        ISet<IAnything> ParameterChange { get; }
    }
}
