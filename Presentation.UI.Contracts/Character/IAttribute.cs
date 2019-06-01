using System;

namespace Presentation.UI.Contracts
{
    public interface IAttribute
    {
        string Name { get; }
        int Level { get; }
        void AddPoint();
        void RemovePoint();
    }
}
