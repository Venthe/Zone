using System;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.Scripting
{
    public class Script : AbstractEntity<string>
    {
        // FIXME: Workaround
        public static Game Game;
        private ScriptRepository scriptRepository;
        private Func<Game, ScriptRepository, object, object> script;

        public Script(string id, Func<Game, ScriptRepository, object, object> script)
        {
            Id = id;
            this.script = script;
            scriptRepository = new ScriptRepository();
        }

        public object Execute(object dependency = null) => script?.Invoke(Game, scriptRepository, dependency);
    }
}
