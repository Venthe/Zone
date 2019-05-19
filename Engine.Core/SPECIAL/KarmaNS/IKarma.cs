namespace Engine.Core.SPECIAL.KarmaNS
{
    public interface IKarma: ITranslation<string>
    {
        string Classification { get; }
        string Level { get; }
        int Value { get; set; }

        string ToString();
    }
}
