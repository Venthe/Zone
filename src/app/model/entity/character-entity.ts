import {Attributes} from "./attributes";
import {Skills} from "./skills";
import {Traits} from "./traits";

class Experience {
  amount = 0;
}

class CharacterEntity {
  level = 1;
  challenges = {};
  experience = new Experience();
  name = "";
  attributes = new Attributes();
  skills = new Skills();
  kills = [];
  traits = new Traits();
}
