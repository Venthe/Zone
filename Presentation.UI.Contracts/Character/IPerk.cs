using System;

namespace Presentation.UI.Contracts
{
    public interface IPerk
    {
        string Name { get; }
        void Add();
        int Level { get; }
        int MaxLevel { get; }
        string Description { get; }
    }
}
