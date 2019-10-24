import { Game } from '../game/game.model';
import { Player } from '../player/player.model';

export type GlobalVariables = { player: Player, game: Game };
export type Script = (props: any & GlobalVariables) => any;
export type Scripts = { [key: string]: Script };