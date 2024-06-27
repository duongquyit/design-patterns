import { IClan } from './interfaces/interface.clan';

export class Warrior implements IClan {
  getClan(): string {
    return "I'm Warrior";
  }
}

export class Magician implements IClan {
  getClan(): string {
    return "I'm Magician";
  }
}

export class Snipper implements IClan {
  getClan(): string {
    return "I'm Snipper";
  }
}
