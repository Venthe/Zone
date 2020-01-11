import {GameDifficulty} from "../game";
import {Fallout2Attributes} from "./attributes";
import {Fallout2DerivedAttributes} from "./derived-attributes";
import {Fallout2Experience} from "./experience";
import {Fallout2Perks} from "./perks/perks";
import {Fallout2Reputation} from "./reputation";
import {Fallout2Skills} from "./skills";
import {Fallout2Traits} from "./traits";

export enum Gender {
  Male,
  Female
}

class Fallout2CharacterEntity {
  constructor(private readonly gameDifficulty: GameDifficulty) {
  }

  name = "";

  experience = new Fallout2Experience();
  karma = new Fallout2Reputation();

  attributes = new Fallout2Attributes();
  skills = new Fallout2Skills(this.gameDifficulty, this.attributes);
  derivedAttributes = new Fallout2DerivedAttributes(this.attributes);

  traits = new Fallout2Traits();
  challenges = {};
  kills = [];
  perks = new Fallout2Perks();
}
