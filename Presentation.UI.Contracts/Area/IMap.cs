namespace Presentation.UI.Contracts
{
    interface IMap
    {
        IAreaMap LocalMap { get; }
        IAreaMap GlobalMap { get; }
    }
}
