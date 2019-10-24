import { AppState, GlobalState } from './app.reducer';
import { createSelector } from '@ngrx/store';
import { Player } from '../player/player.model';
import { Game } from '../game/game.model';

export const selectAppFeature = (state: GlobalState): AppState => state.app;
 
export const selectPlayer = createSelector(
  selectAppFeature,
  (state: AppState): Player => state.player
);
 
export const selectGame = createSelector(
  selectAppFeature,
  (state: AppState): Game => state.game
);