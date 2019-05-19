namespace Engine.Core.SPECIAL
{
    public interface ITranslation<TTranslationType>
    {
        TTranslationType Translation { get; }
    }
}
