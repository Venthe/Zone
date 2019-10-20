namespace Engine.Core.SPECIAL {
    public class KarmaTitleDescription {
        public string GoodKarmaDescription { get; set; }
        public string BadKarmaDescription { get; set; }
        public string NeutralKarmaDescription { get; set; }

        public KarmaTitleDescription(string goodKarma, string neutralKarma, string badKarma) {
            GoodKarmaDescription = goodKarma;
            NeutralKarmaDescription = neutralKarma;
            BadKarmaDescription = badKarma;
        }
        public class Description {
            string BadKarmaDescription { get; set; }
            string GoodKarmaDescription { get; set; }
            string NeutralKarmaDescription { get; set; }
        }
    }
}
