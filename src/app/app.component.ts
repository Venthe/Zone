import {Component, OnInit} from "@angular/core";
import {ScriptsLibraryService} from "./scripts-library/scripts-library.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {selectGame, selectPlayer} from "./state/app.selector";
import {Observable} from "rxjs";
import {CreatureKilledEvent, ExperienceGrantedEvent} from "./state/app.actions";
import {Game, Player} from "./state/app.reducer";
import {Actions} from "@ngrx/effects";
import {map} from "rxjs/operators";

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
  player$: Observable<Player | any>;

  constructor(private readonly scriptsLibrary: ScriptsLibraryService,
              private readonly formBuilder: FormBuilder,
              private readonly actions$: Actions,
              private readonly store$: Store<any>) {
  }

  ngOnInit() {
    const scriptFormState = JSON.stringify({
      globalVariablesOverride: {
        player: {attributes: {agility: 5}},
        game: {difficulty: "easy"}
      }
    });
    this.scriptForm = this.formBuilder.group({
      key: new FormControl("skillsBaseValueSneak", {validators: Validators.required, updateOn: "submit"}),
      props: new FormControl(scriptFormState, {updateOn: "submit"})
    });
    const experienceFormState = 10;
    this.experienceForm = this.formBuilder.group({
      amount: new FormControl(experienceFormState, {validators: Validators.required, updateOn: "submit"}),
    });
    const killEnemyFormState = JSON.stringify({
      entityKilled: "Abomination",
      weaponUsed: {
        damageType: "Concussive",
        carryType: "OneHanded",
        weaponType: "Unarmed"
      }
    });
    this.killEnemyForm = this.formBuilder.group({
      kill: new FormControl(killEnemyFormState, {
        validators: Validators.required,
        updateOn: "submit"
      }),
    });
    this.game$ = this.store$.pipe(select(selectGame));
    this.player$ = this.store$.pipe(select(selectPlayer), map(player => {
      return {
        ...player, calculatedSkills: {
          barter: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueBarter")}),
          energyWeapons: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueEnergyWeapons")}),
          explosives: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueExplosives")}),
          bigGuns: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueBigGuns")}),
          smallGuns: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueSmallGuns")}),
          lockpick: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueLockpick")}),
          medicine: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueMedicine")}),
          meleeWeapons: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueMeleeWeapons")}),
          repair: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueRepair")}),
          science: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueScience")}),
          sneak: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueSneak")}),
          speech: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueSpeech")}),
          survival: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueSurvival")}),
          unarmed: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueUnarmed")}),
          throwing: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueThrowing")}),
          firstAid: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueFirstAid")}),
          doctor: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueDoctor")}),
          steal: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueSteal")}),
          traps: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueTraps")}),
          gambling: this.scriptsLibrary.execute("skillGetValue", {skill: this.scriptsLibrary.execute("skillsBaseValueGambling")}),
        }
      };
    }));
  }

  executeScript() {
    const {key, props} = this.scriptForm.value;
    this.scriptsLibrary.execute(key, JSON.parse(props));
  }

  grantExperience() {
    const {amount: experience} = this.experienceForm.value;
    this.store$.dispatch(ExperienceGrantedEvent({experience: experience}));
  }

  killEnemy() {
    const {kill} = this.killEnemyForm.value;
    this.store$.dispatch(CreatureKilledEvent({kill: JSON.parse(kill)}));
  }
}
