using System;

namespace Presentation.UI.Contracts
{

    public interface IHealthPoints
    {
        int Current { get; }
        int Max { get; }
    }
}
