using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.Scripting
{
    public class ScriptRepository : InMemoryRepository<Script, string>, IScriptRepository
    {
        public override Script GetById(string id) => base.GetById(id) ?? Script.Empty(id);
    }
}
