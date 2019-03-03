using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.KarmaNS
{
    public interface IKarmaTitleDescription : IAbstractEntity<int>
    {
        string BadKarmaDescription { get; set; }
        string GoodKarmaDescription { get; set; }
        string NeutralKarmaDescription { get; set; }
    }
}
