import {Action, ActionReducer, ActionReducerMap, createReducer, on} from "@ngrx/store";
import {
  ChallengeGrantedEvent,
  CreatureKilledEvent,
  ExperienceGrantedEvent,
  LevelUpEvent,
  NoopAction
} from "./app.actions";
import {Achievement, AttributeKey, EnemyType, GameDifficulty, Skills, Weapon} from "./model";

export interface GlobalState {
  app: AppState;
}

export interface ChallengeEntry {
  rank: number;
  challengeId: string;
}

export interface KillEntry {
  entityKilled: EnemyType;
  weaponUsed: Weapon;
}

export interface Player {
  name: string;
  level: number;
  experience: number;
  attributes: { [key in AttributeKey]: number };
  skills: Skills;
  kills: KillEntry[];
  challenges: { [key: string]: ChallengeEntry };
}

export interface Game {
  difficulty: GameDifficulty;
  achievements: { [key: string]: Achievement };
}

export interface AppState {
  game: Game;
  player: Player;
}

export const initialState: AppState = {
  game: {
    difficulty: GameDifficulty.EASY,
    achievements: {}
  },
  player: {
    level: 1,
    challenges: {},
    experience: 0,
    name: "",
    attributes: {
      agility: 5,
      charisma: 5,
      endurance: 5,
      intelligence: 5,
      luck: 5,
      perception: 5,
      strength: 5,
    },
    skills: {},
    kills: []
  }
};

export const appReducer: ActionReducer<AppState, Action> = createReducer(initialState,
  on(NoopAction, state => state),
  on(ExperienceGrantedEvent, (state, action) => ({
    ...state,
    player: {...state.player, experience: state.player.experience + action.experience}
  })),
  on(CreatureKilledEvent, (state, action) => ({
    ...state,
    player: {...state.player, kills: [...state.player.kills, action.kill]}
  })),
  on(ChallengeGrantedEvent, onChallengeGranted()),
  on(LevelUpEvent, (state) => ({
    ...state,
    player: {...state.player, level: state.player.level + 1}
  }))
);

function onChallengeGranted() {
  return (state, action) => {
    const challenge: ChallengeEntry = state.player.challenges[action.challenge.uuid] === undefined ? {
      challengeId: action.challenge.uuid,
      rank: 1
    } : {
      challengeId: state.player.challenges[action.challenge.uuid].challengeId,
      rank: state.player.challenges[action.challenge.uuid].rank + 1
    };

    const challenges = {...state.player.challenges};
    challenges[action.challenge.uuid] = challenge;

    return {
      ...state,
      player: {...state.player, challenges}
    };
  };
}

export const reducers: ActionReducerMap<GlobalState> = {
  app: appReducer
};


// export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
