export enum GameDifficulty {
  Easy = "easy",
  Hard = "hard"
}

export class Game {
  gameStartingDate: Date = new Date(2241, 6, 25, 8, 24, 0, 0);
  difficulty: GameDifficulty.Easy;
  achievements: {};
  challenges: {};
}
