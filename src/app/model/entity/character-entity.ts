import {GameDifficulty} from "../game";
import {Fallout2Attributes} from "./attributes";
import {Fallout2DerivedAttributes} from "./derived-attributes";
import {Fallout2Skills} from "./skills";
import {Fallout2Traits} from "./traits";

class Experience {
  amount = 0;
}

class Fallout2Perks {
  /** How many levels must pass before your character gains another perk. */
  perkRate = 3;
}

class Fallout2CharacterEntity {
  constructor(private readonly gameDifficulty: GameDifficulty) {
  }

  level = 1;
  name = "";

  experience = new Experience();

  attributes = new Fallout2Attributes();
  skills = new Fallout2Skills(this.gameDifficulty, this.attributes);
  derivedAttributes = new Fallout2DerivedAttributes(this.attributes);

  traits = new Fallout2Traits();
  challenges = {};
  kills = [];
  perks = new Fallout2Perks();
}
