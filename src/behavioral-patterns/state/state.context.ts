import { IState } from './interfaces/state.interface';
import { NoCoin } from './state.concrete';

export class VendingMachine {
  private state: IState;

  constructor() {
    this.state = new NoCoin(this);
  }

  setState(state: IState) {
    this.state = state;
  }

  insert() {
    this.state.insert();
  }

  eject() {
    this.state.eject();
  }

  select() {
    this.state.select();
  }

  dispense() {
    this.state.dispense();
  }
}
