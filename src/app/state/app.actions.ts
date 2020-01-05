import {createAction, props} from "@ngrx/store";
import {Achievement, Challenge} from "./model";
import {KillEntry} from "./app.reducer";

export const NoopAction = createAction(
  "[NOOP]",
  props<{}>()
);

export const ExperienceGrantedEvent = createAction(
  "[Player] Experience granted",
  props<{ experience: number }>()
);

export const ChallengeGrantedEvent = createAction(
  "[Player] Challenge granted",
  props<{ challenge: Challenge }>()
);

export const AchievementGranted = createAction(
  "[Player] Achievement granted",
  props<{ achievement: Achievement }>()
);

export const CreatureKilledEvent = createAction(
  "[Player] Creature killed",
  props<{ kill: KillEntry }>()
);

export const LevelUpEvent = createAction("[Player] Level up");

