using System;
using Engine.Core.Sharedkernel.Repositories;
using Engine.Core.Sharedkernel.Utilities;

namespace Engine.Core.Scripting
{
    public class Script : AbstractEntity<string>
    {
        private readonly ScriptRepository scriptRepository;
        private readonly dynamic baseObject;
        private readonly Func<ScriptRepository, dynamic, dynamic, dynamic> script;

        public Script(dynamic baseObject, string id, Func<ScriptRepository, dynamic, dynamic, dynamic> script)
        {
            this.baseObject = baseObject;
            Id = id;
            this.script = script;
            scriptRepository = new ScriptRepository();
        }

        public object Execute(dynamic argument = null) => script?.Invoke(scriptRepository, baseObject, argument);

        public static Script Empty => new Script(null, "EmptyScript", (_, __, ___) =>
        {
            new LoggerService(typeof(Script)).Log("Script not found");
            return null;
        }
        );
    }
}
