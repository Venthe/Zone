namespace Engine.Core.SPECIAL
{
    internal interface ITranslation<TTranslationType>
    {
        TTranslationType Translation { get; }
    }
}
