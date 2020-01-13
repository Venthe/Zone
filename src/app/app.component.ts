import {Component, OnInit} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {events} from "./events";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "zone-prototype";

  actions = [];

  constructor(private readonly store$: Store<any>,
              private readonly actions$: Actions) {
    actions$.pipe(tap(action => this.actions.push(action))).subscribe();
  }

  ngOnInit(): void {
    events.forEach(action => this.store$.dispatch(action));
  }
}
