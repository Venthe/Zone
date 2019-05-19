using Engine.Core.Scripting;

namespace Engine.Core.SPECIAL.RadiationNS
{
    internal class Radiation : IRadiation
    {
        private readonly ScriptRepository scriptRepository = new ScriptRepository();
        private int _value = 0;

        public int Value
        {
            get => _value;
            set {
                scriptRepository.GetById("handleRadiationLevel").Execute(value);
                _value = value;
            }
        }
    }
}
