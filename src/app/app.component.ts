import {Component, OnInit} from "@angular/core";
import {ScriptsLibraryService} from "./scripts-library/scripts-library.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {selectGame, selectPlayer} from "./state/app.selector";
import {Observable} from "rxjs";
import {CreatureKilledEvent, ExperienceGrantedEvent} from "./state/app.actions";
import {Game, Player} from "./state/app.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "zone-prototype";
  scriptForm: FormGroup;
  experienceForm: FormGroup;
  killEnemyForm: FormGroup;
  game$: Observable<Game>;
  player$: Observable<Player>;

  constructor(private readonly scriptsLibrary: ScriptsLibraryService,
              private readonly formBuilder: FormBuilder,
              private readonly store$: Store<any>) {
  }

  ngOnInit() {
    this.scriptForm = this.formBuilder.group({
      key: new FormControl("skillsBaseValueSneak", {validators: Validators.required, updateOn: "submit"}),
      props: new FormControl("{\"globalVariablesOverride\":{\"player\":{\"attributes\":{\"agility\":5}},\"game\":{\"difficulty\":\"easy\"}}}", {updateOn: "submit"})
    });
    this.experienceForm = this.formBuilder.group({
      amount: new FormControl("10", {validators: Validators.required, updateOn: "submit"}),
    });
    this.killEnemyForm = this.formBuilder.group({
      kill: new FormControl("{\"entityKilled\":\"Abomination\", \"weaponUsed\":{\"damageType\":\"Concussive\",\"carryType\":\"OneHanded\",\"weaponType\":\"Unarmed\"}}", {
        validators: Validators.required,
        updateOn: "submit"
      }),
    });

    this.game$ = this.store$.pipe(select(selectGame));
    this.player$ = this.store$.pipe(select(selectPlayer));
  }

  executeScript() {
    const {key, props} = this.scriptForm.value;
    this.scriptsLibrary.execute(key, JSON.parse(props));
  }

  grantExperience() {
    const {amount: experience} = this.experienceForm.value;
    this.store$.dispatch(ExperienceGrantedEvent({experience: +experience}));
  }

  killEnemy() {
    const {kill} = this.killEnemyForm.value;
    this.store$.dispatch(CreatureKilledEvent({kill: JSON.parse(kill)}));
  }
}
