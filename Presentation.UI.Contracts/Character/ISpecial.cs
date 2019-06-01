using System.Collections.Generic;

namespace Presentation.UI.Contracts
{
    public interface ISpecial
    {
        ISet<IAttribute> Attributes { get; }
    }
}
