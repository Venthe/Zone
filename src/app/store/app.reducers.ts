import {ActionReducerMap, createReducer, MetaReducer, on} from "@ngrx/store";
import {environment} from "../../environments/environment";

export interface State {

}

export const reducers: ActionReducerMap<State | any> = {
  game: createReducer({}, on({type: "[Game] Difficulty set"}, state=>({...state, d})))
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
