import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MatSnackBar} from "@angular/material/snack-bar";
import {concatMap, filter, map, tap, withLatestFrom} from "rxjs/operators";
import {CreatureKilledEvent, ExperienceGrantedEvent, LevelUpEvent} from "./app.actions";
import {Challenges} from "./model";
import {Action, select, Store} from "@ngrx/store";
import {selectGame, selectPlayer} from "./app.selector";
import {ScriptsLibraryService} from "../scripts-library/scripts-library.service";

@Injectable()
export class AppEffects {
  constructor(private readonly actions$: Actions,
              private readonly snackBar: MatSnackBar,
              private readonly scriptsLibraryService: ScriptsLibraryService,
              private readonly store$: Store<any>) {
  }

  showMessageOnAnyAction$ = createEffect(
    () => this.actions$.pipe(
      tap(action => this.snackBar.open(`${JSON.stringify(action)}`)),
      tap(action => console.debug("Action dispatched.", action))
    ),
    {dispatch: false}
  );

  checkChallengeConditions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CreatureKilledEvent),
        withLatestFrom(this.store$.pipe(select(selectGame)), this.store$.pipe(select(selectPlayer))),
        concatMap(([action, game, player]): Action[] =>
          Object.keys(Challenges)
            .map(key => Challenges[key])
            .filter(challenge => challenge.canBeGranted !== undefined)
            .filter(challenge => challenge.canBeGranted({game, player}))
            .filter(challenge => challenge.onObtained !== undefined)
            .flatMap(challenge => challenge.onObtained())
        )
      );
    }
  );

  checkLevelUpConditions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ExperienceGrantedEvent),
        map(() => this.scriptsLibraryService.execute("calculateExperienceNeededForNextLevel")),
        filter(experienceNeededForNextLevel => experienceNeededForNextLevel === 0),
        map(() => LevelUpEvent())
      );
    }
  );
}
