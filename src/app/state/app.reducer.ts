import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Player } from '../player/player.model';
import { Game, GameDifficulty } from '../game/game.model';
import { LoginAction } from './app.actions';

export interface AppState {
  game: Game;
  player: Player;
}

export interface GlobalState {
  app: AppState
}

export const initialState: AppState = {
  game: {
    difficulty: GameDifficulty.EASY
  },
  player: {
    attributes: {
      agility: 5,
      charisma: 5,
      endurance: 5,
      intelligence: 5,
      luck: 5,
      perception: 5,
      strength: 5,
    }
  }
}

export const appReducer: ActionReducer<AppState, Action> = createReducer(initialState,
  on(LoginAction, state => state)
);

export const reducers: ActionReducerMap<GlobalState> = {
  app: appReducer
};


// export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
