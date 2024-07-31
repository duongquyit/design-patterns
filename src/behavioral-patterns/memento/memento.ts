export class Memento {
  private state: string;

  constructor(_state: string = '') {
    this.state = _state;
  }

  getState(): any {
    return this.state;
  }
}
