import {GameDifficulty} from "../game";
import {Fallout2Attributes} from "./attributes";
import {Fallout2DerivedAttributes} from "./derived-attributes";
import {Fallout2Karma} from "./karma";
import {Fallout2Perks} from "./perks/perks";
import {Fallout2Skills} from "./skills";
import {Fallout2Traits} from "./traits";

class Fallout2CharacterEntity {
  constructor(private readonly gameDifficulty: GameDifficulty) {
  }

  level = 1;
  name = "";

  experience = 0;
  karma = new Fallout2Karma();

  attributes = new Fallout2Attributes();
  skills = new Fallout2Skills(this.gameDifficulty, this.attributes);
  derivedAttributes = new Fallout2DerivedAttributes(this.attributes);

  traits = new Fallout2Traits();
  challenges = {};
  kills = [];
  perks = new Fallout2Perks();
}
