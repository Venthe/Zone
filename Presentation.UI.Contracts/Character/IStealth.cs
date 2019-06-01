using System;

namespace Presentation.UI.Contracts
{
    public interface IStealth
    {
        bool IsHidden { get; }
        float StealthLevel { get; }
    }
}
