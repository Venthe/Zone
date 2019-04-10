using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.Scripting
{
    public class ScriptRepository : AbstractInMemoryRepository<Script, string>
    {
        new public Script GetById(string id) => repository.GetById(id) ?? Script.Empty;
    }
}
