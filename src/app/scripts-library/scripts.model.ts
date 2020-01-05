import {Game, Player} from "../state/app.reducer";

export interface GlobalVariables {
  player: Player;
  game: Game;
}

export type Script = (props: any | GlobalVariables) => any;

export interface Scripts {
  [key: string]: Script;
}
