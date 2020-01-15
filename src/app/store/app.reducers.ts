import {ActionReducerMap, createReducer, MetaReducer, on} from "@ngrx/store";
import {environment} from "../../environments/environment";

export interface State {

}

export const reducers: ActionReducerMap<State | any> = {
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
