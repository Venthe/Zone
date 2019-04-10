using System;

namespace Engine.Core.Sharedkernel.Utilities
{
    internal class LoggerService : ILoggerService
    {
        private readonly Type classType;

        internal LoggerService(Type classType)
        {
            this.classType = classType;
        }

        public void Log(string message) => Console.Out.WriteLine($"[{DateTime.Now}|{classType.Name}] {message}");
    }
}
