using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL.AttributesNS.DerivedNS
{
    public class DeprivedAttribute : AbstractAttribute<int, IBaseTranslation>, IDerivedAttribute<int>
    {        private readonly ScriptRepository scriptRepository = new ScriptRepository();
        private readonly IReadOnlyRepository<IBaseTranslation, string> translations = new DerivedAttributeTranslationRepository();

        public DeprivedAttribute(string id)
        {
            Id = id;
        }

        public override int Value => (int)(scriptRepository.GetById(Id)?.Execute() ?? 0);

        public override IBaseTranslation Translation => translations.GetById(Id);
    }
}
