using System;
using Engine.Core.Scripting;
using Engine.Core.SPECIAL.PerksNS;

namespace Engine.Core.CLI
{
    class Program
    {
        static void Main(string[] args)
        {
            var game = new Game();
            ApplicationInitializer.LoadSampleData(ref game);

            game.Player.Name = "Test";

            Console.WriteLine(game.Player);

            var scripts = new ScriptRepository();
            scripts.GetById("testAddPerk").Execute("BlackWidow");

            Console.WriteLine(game.Player);
        }
    }
}
