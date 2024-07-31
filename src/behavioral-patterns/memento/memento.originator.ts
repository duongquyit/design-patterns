import { Memento } from './memento';

export class Editor {
  private state: string;

  constructor(_state: string) {
    this.state = _state;
  }

  getState(): string {
    return this.state;
  }

  write(_string: string) {
    this.state = `${this.state} ${_string}`;
  }

  save(): Memento {
    return new Memento(this.state);
  }

  restore(memento: Memento) {
    this.state = memento.getState();
  }
}
