import {Action, ActionReducer, ActionReducerMap, createReducer, on} from "@ngrx/store";
import {
  ChallengeGrantedEvent,
  CreatureKilledEvent,
  ExperienceGrantedEvent,
  LevelUpEvent,
  NoopAction
} from "./app.actions";
import {Achievement, AttributeKey, EnemyType, GameDifficulty, Skill, SkillKey, Weapon} from "./model";

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
  skills: { [key in SkillKey]: Skill };
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
    difficulty: GameDifficulty.Easy,
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
    skills: {
      barter: {isTagged: false, points: 0},
      energyWeapons: {isTagged: false, points: 0},
      explosives: {isTagged: false, points: 0},
      bigGuns: {isTagged: false, points: 0},
      smallGuns: {isTagged: false, points: 0},
      lockpick: {isTagged: false, points: 0},
      medicine: {isTagged: false, points: 0},
      meleeWeapons: {isTagged: false, points: 0},
      repair: {isTagged: false, points: 0},
      science: {isTagged: false, points: 0},
      sneak: {isTagged: false, points: 0},
      speech: {isTagged: false, points: 0},
      survival: {isTagged: false, points: 0},
      unarmed: {isTagged: false, points: 0},
      throwing: {isTagged: false, points: 0},
      firstAid: {isTagged: false, points: 0},
      doctor: {isTagged: false, points: 0},
      steal: {isTagged: false, points: 0},
      traps: {isTagged: false, points: 0},
      gambling: {isTagged: false, points: 0},
    },
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
