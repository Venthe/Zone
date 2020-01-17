import {createAction, props} from "@ngrx/store";

export const setName = createAction("[Entity] Set name", props<{ name: string }>());
export const setAge = createAction("[Entity] Set age", props<{ age: number }>());
export const setSex = createAction("[Entity] Set sex", props<{ sex: string }>());
export const raiseAttribute = createAction("[Entity] Raise attribute");
export const lowerAttribute = createAction("[Entity] Lower attribute");
export const tagSkill = createAction("[Entity] Tag skill");
export const setTrait = createAction("[Entity] Set trait");
export const finishCharacter = createAction("[Entity] Finish character");
export const cancelCharacterCreation = createAction("[Entity] Cancel character creation");

export const openOptions = createAction("[UI] Open options");
