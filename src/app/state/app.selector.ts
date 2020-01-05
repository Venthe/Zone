import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState, Game, GlobalState, Player} from "./app.reducer";

export const selectAppFeature = (state: GlobalState): AppState => state.app;

export const selectPlayer: MemoizedSelector<GlobalState, Player> = createSelector(
  selectAppFeature,
  (state: AppState): Player => state.player
);

export const selectGame: MemoizedSelector<GlobalState, Game> = createSelector(
  selectAppFeature,
  (state: AppState): Game => state.game
);
