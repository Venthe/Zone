namespace Engine.Core.SPECIAL
{
    interface ITranslation<TTranslationType>
    {
        TTranslationType Translation { get; }
    }
}
