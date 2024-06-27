import { IClan } from './interfaces/interface.clan';

export abstract class Character {
  name: string;
  gender: number;
  generation: IClan;

  constructor(_name: string, _gender: number, _generation: IClan) {
    this.name = _name;
    this.gender = _gender;
    this.generation = _generation;
  }

  abstract getClan(): string;
}


export class BasicChararater extends Character {
  constructor(_name: string, _gender: number, _generation: IClan) {
    super(_name, _gender, _generation);
  }

  getClan() {
    return this.generation.getClan();
  }
}
