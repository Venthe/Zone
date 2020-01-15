import {Component, OnInit} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {interval, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {events} from "./events";
import {Game} from "./model/game";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `.app-root {
      padding: 0.5rem;
    }`
  ]
})
export class AppComponent implements OnInit {
  title = "zone-prototype";

  actions = [];
  timeLoop$: Observable<Date>;
  game;

  get sexes() {
    return [
      {label: "Male", value: "m"},
      {label: "Female", value: "f"}
    ];
  }

  get skills() {
    return [
      "smallGuns",
      "bigGuns",
      "energyWeapons",
      "unarmed",
      "meleeWeapons",
      "throwing",
      "firstAid",
      "doctor",
      "sneak",
      "lockpick",
      "steal",
      "traps",
      "science",
      "repair",
      "speech",
      "barter",
      "gambling",
      "outdoorsman"
    ];
  }

  get attributes() {
    return [
      "strength",
      "perception",
      "endurance",
      "charisma",
      "intelligence",
      "agility",
      "luck"
    ];
  }

  get derivedAttributes() {
    return ["actionPoints",
      "armorClass",
      "carryWeight",
      "criticalChance",
      "damageResistance",
      "healingRate",
      "hitPoints",
      "bonusToMaxMeleeDamage",
      "partyLimit",
      "poisonResistance",
      "radiationResistance",
      "sequence"];
  }

  get statuses() {
    return [
      "poisoned",
      "radiated",
      "eyeDamage",
      "crippledRightArm",
      "crippledLeftArm",
      "crippledRightLeg",
      "crippledLeftLeg"
    ];
  }

  get traits() {
    return [
      "bloodyMess",
      "bruiser",
      "chemReliant",
      "chemResistant",
      "fastMetabolism",
      "fastShot",
      "finesse",
      "gifted",
      "goodNatured",
      "heavyHanded",
      "jinxed",
      "kamikaze",
      "oneHander",
      "sexAppeal",
      "skilled",
      "smallFrame"
    ];
  }

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
