using System;
using System.Linq;
using Engine.Core.Initializer;
using Engine.Core.Scripting;

namespace Engine.Core.CLI
{
    class Program
    {
        static void Main()
        {
            var game = new Game();
            ApplicationInitializer.LoadSampleData(ref game);

            game.Player.Name = "Test";

            Console.WriteLine(game.Player);
            TestConsole();

            Console.WriteLine(game.Player);
        }

        private static void TestConsole()
        {
            var scripts = new ScriptRepository();
            Console.WriteLine("Type command...");

            while (true) {
                string input = Console.ReadLine();
                var splittedInput = input.Split(" ");

                scripts.GetById(splittedInput[0]).Execute(splittedInput.Skip(1).ToList<string>());
            }
        }
    }
}
