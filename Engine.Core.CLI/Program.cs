using System;
using System.Linq;
using Engine.Core.Initializer;
using Engine.Core.Scripting;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.CLI
{
    class Program
    {
        private static IRepository<Script, string> scriptRepository;

        static void Main()
        {
            WireServices();
            InitializeGame();
            StartTestConsole();
        }

        private static void WireServices()
        {
            scriptRepository = new ScriptRepository();
        }

        private static void InitializeGame()
        {
            var game = GameInitializer.Initialize();
            GameInitializer.LoadSampleData(ref game);
        }

        private static void StartTestConsole()
        {
            Console.WriteLine("Test console");

            while (true)
            {
                Console.Write("> ");
                string[] splittedInput = GetInput();

                string id = splittedInput[0];
                var argument = splittedInput.Skip(1).ToList();

                scriptRepository.GetById(id).Execute(argument);
                Console.WriteLine();
            }
        }

        private static string[] GetInput()
        {
            string input = Console.ReadLine();
            var substrings = input.Split(" ");
            return substrings;
        }
    }
}
