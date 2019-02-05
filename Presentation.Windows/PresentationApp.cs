using Xenko.Engine;

namespace Presentation.Windows {
    static class ZonePresentationApp {
        static void Main(string[] args) {
            using (var game = new Game()) {
                game.Run();
            }
        }
    }
}
