using System;

namespace Presentation.UI.Contracts
{
    public interface IGameTime
    {
        DateTime Current { get; }
        string Date { get; }
        string Time { get; }
    }
}
