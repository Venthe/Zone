export enum GameDifficulty {
  Easy = "easy",
  Hard = "hard"
}

export class Game {
  difficulty: GameDifficulty.Easy;
  achievements: {};
  challenges: {};
}
