import {Action} from "@ngrx/store";
import {setAge, setName, setSex} from "../../store/app.actions";
import {GameDifficulty} from "../game";
import {Fallout2Attributes} from "./attributes";
import {Fallout2DerivedAttributes} from "./derived-attributes";
import {Fallout2Experience} from "./experience";
import {Fallout2Perks} from "./perks/perks";
import {Fallout2Reputation} from "./reputation";
import {Fallout2Skills} from "./skills";
import {Fallout2Traits} from "./traits";

export enum Sex {
  Male="m",
  Female="f"
}

export class Fallout2CharacterEntity {
  constructor() {
  }

  name = "";
  age = 25;
  sex: Sex = Sex.Male;

  experience = new Fallout2Experience();
  karma = new Fallout2Reputation();

  attributes = new Fallout2Attributes();
  skills = new Fallout2Skills(this.attributes);
  derivedAttributes = new Fallout2DerivedAttributes(this.attributes);

  traits = new Fallout2Traits();
  challenges = {};
  kills = [];
  perks = new Fallout2Perks();

  setName(name: string): Action[] {
    this.name = name;
    return [setName({name})];
  }

  setAge(age: number) {
    this.age = age;
    return [setAge({age})];
  }

  setSex(sex: Sex) {
    this.sex = sex;
    return [setSex({sex})];
  }
}
