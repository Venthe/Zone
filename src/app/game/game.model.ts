export enum GameDifficulty {
    EASY="easy",
    HARD="hard"
}

export interface Game {
    difficulty: GameDifficulty
}