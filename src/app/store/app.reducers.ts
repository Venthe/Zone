import {ActionReducerMap, createReducer, createSelector, on} from "@ngrx/store";
import * as _ from "lodash";
import {Fallout2CharacterEntity} from "../model/entity/character-entity";
import {Game} from "../model/game";
import {
  cancelCharacterCreation,
  finishCharacter,
  lowerAttribute,
  raiseAttribute,
  setAge,
  setSex,
  setName,
  setTrait,
  tagSkill
} from "./app.actions";

export interface State {
  game: Game;
  player: Fallout2CharacterEntity;
}

export const initialState: State = {
  game: new Game(),
  player: new Fallout2CharacterEntity()
};

export const selectState = (state) => state.app;
export const selectPlayer = createSelector(selectState, (state: State) => _.cloneDeep(state.player));
export const selectGame = createSelector(selectState, (state: State) => state.game);

const appReducer = createReducer(
  initialState,
  on(setName, (state, action) => {
    const player = _.cloneDeep(state.player);
    player.setName(action.name);
    return {...state, player};
  }),
  on(setAge, (state, action) => {
    const player = _.cloneDeep(state.player);
    player.setAge(action.age);
    return {...state, player};
  }),
  on(setSex, (state, action)=> {
    const player = _.cloneDeep(state.player);
    player.setSex(action.sex);
    return {...state, player};
  }),
  on(raiseAttribute, (state, action) => ({...state})),
  on(lowerAttribute, (state, action) => ({...state})),
  on(tagSkill, (state, action) => ({...state})),
  on(setTrait, (state, action) => ({...state})),
  on(finishCharacter, (state, action) => ({...state})),
  on(cancelCharacterCreation, (state, action) => ({...state}))
);

export const reducers: ActionReducerMap<State | any> = {
  app: (state, action) => appReducer(state, action)
};
