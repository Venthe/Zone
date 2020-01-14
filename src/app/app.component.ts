import {Component, OnInit} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {interval, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {events} from "./events";
import {Game} from "./model/game";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "zone-prototype";

  actions = [];
  timeLoop$: Observable<Date>;
  game;

  constructor(private readonly store$: Store<any>,
              private readonly actions$: Actions) {
    actions$.pipe(tap(action => this.actions.push(action))).subscribe();
  }

  ngOnInit(): void {
    this.game = new Game();
    events.forEach(action => this.store$.dispatch(action));
    this.timeLoop$ = interval(10).pipe(map(time => new Date(this.game.gameStartingDate.getTime() + time * 100)));
  }
}
