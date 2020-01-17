import {Component, OnInit} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {interval, Observable} from "rxjs";
import {map, tap, withLatestFrom} from "rxjs/operators";
import {Fallout2CharacterEntity, Sex} from "./model/entity/character-entity";
import {Game} from "./model/game";
import {
  cancelCharacterCreation,
  finishCharacter,
  lowerAttribute,
  raiseAttribute,
  setAge,
  setName,
  setSex,
  setTrait,
  tagSkill
} from "./store/app.actions";
import {selectGame, selectPlayer} from "./store/app.reducers";

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
  actions = [];
  timeLoop$: Observable<Date>;
  game$: Observable<Game>;
  player$: Observable<Fallout2CharacterEntity>;

  sexes = [
    {label: "Male", value: Sex.Male},
    {label: "Female", value: Sex.Female}
  ];

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
      "st",
      "pe",
      "en",
      "ch",
      "in",
      "ag",
      "lk"
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
    this.game$ = this.store$.pipe(select(selectGame));
    this.player$ = this.store$.pipe(select(selectPlayer));
    this.timeLoop$ = interval(10).pipe(
      withLatestFrom(this.game$),
      map(([time, game]) => new Date(game.gameStartingDate.getTime() + time * 100))
    );

    // events.forEach(action => this.store$.dispatch(action));
  }

  setName = name => this.store$.dispatch(setName({name}));
  setAge = age => this.store$.dispatch(setAge({age}));
  setSex = sex => this.store$.dispatch(setSex({sex}));
  raiseAttribute = () => this.store$.dispatch(raiseAttribute());
  lowerAttribute = () => this.store$.dispatch(lowerAttribute());
  tagSkill = () => this.store$.dispatch(tagSkill());
  setTrait = () => this.store$.dispatch(setTrait());
  finishCharacter = () => this.store$.dispatch(finishCharacter());
  cancelCharacterCreation = () => this.store$.dispatch(cancelCharacterCreation());
}
