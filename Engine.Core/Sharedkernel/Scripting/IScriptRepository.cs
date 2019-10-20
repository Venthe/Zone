namespace Engine.Core.Scripting {
    public interface IScriptRepository {
        Script GetById(string scriptName);
    }
}
