using Xenko.Engine;

namespace Presentation.Windows {
    internal static class ZonePresentationApp {
        private static void Main() {
            using (var game = new Game()) {
                game.Run();
            }
        }
    }
}
