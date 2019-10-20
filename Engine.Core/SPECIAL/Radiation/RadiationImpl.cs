namespace Engine.Core.SPECIAL {
    using Engine.Core.Scripting;

    internal class RadiationImpl : IRadiation {
        private readonly ScriptRepository scriptRepository = new ScriptRepository();
        private int _value = 0;

        public int Value {
            get => _value;
            set {
                scriptRepository.GetById("handleRadiationLevel").Execute(value);
                _value = value;
            }
        }
    }
}
