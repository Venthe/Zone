import {Component, OnInit} from "@angular/core";
import {from, Observable, ReplaySubject, Subject} from "rxjs";
import {filter, mergeMap, scan} from "rxjs/operators";
import {events} from "./events";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "zone-prototype";
  private actionHistory$: Observable<any>;
  private store$: Subject<any>;

  private characters$: Observable<any>;

  ngOnInit(): void {
    this.actionHistory$ = this.createStore();
    events.forEach(action => this.store$.next(action));
    this.characters$ = this.actionHistory$.pipe(
      mergeMap(arr => from(arr)),
      filter(action => action !== undefined && action !== null),
      filter((action: any) => action.type.startsWith("[Entity]")),
      // groupBy(action => action.id.type), //action => action.id.uuid,
      // concatMap(group => group.pipe(toArray())) //group => zip(of(group.key),
    );
  }

  private createStore() {
    this.store$ = new ReplaySubject<any>();
    return this.store$.pipe(
      scan((accumulator: any[], value: any) => [...accumulator, value], [])
    );
  }
}
