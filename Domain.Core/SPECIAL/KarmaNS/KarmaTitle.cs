using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.KarmaNS
{
    public class KarmaTitleDescription : AbstractEntity<int>, IKarmaTitleDescription
    {
        public string GoodKarmaDescription { get; set; }
        public string BadKarmaDescription { get; set; }
        public string NeutralKarmaDescription { get; set; }

        public KarmaTitleDescription(int id, string goodKarma, string neutralKarma, string badKarma)
        {
            Id = id;
            GoodKarmaDescription = goodKarma;
            NeutralKarmaDescription = neutralKarma;
            BadKarmaDescription = badKarma;
        }
    }
}
