using System;

namespace Presentation.UI.Contracts
{
    public interface IMessage
    {
        string Name { get; }
        string Description { get; }
    }
}
