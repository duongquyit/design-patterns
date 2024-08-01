import { IState } from './interfaces/state.interface';
import { VendingMachine } from './state.context';

export class NoCoin implements IState {
  private context: VendingMachine;

  constructor(context: VendingMachine) {
    this.context = context;
  }

  insert(): void {
    console.log('Coin insert!');
    this.context.setState(new HasCoin(this.context));
  }

  eject(): void {
    console.log('No coin to eject.');
  }

  select(): void {
    console.log('Insert coin first.');
  }

  dispense(): void {
    console.log('Insert coin first.');
  }
}

export class HasCoin implements IState {
  private context: VendingMachine;

  constructor(context: VendingMachine) {
    this.context = context;
  }

  insert(): void {
    console.log('Coin already inserted.');
  }

  eject(): void {
    console.log('Coin ejected.');
    this.context.setState(new NoCoin(this.context));
  }

  select(): void {
    console.log('Product selected.');
    this.context.setState(new SoldCoin(this.context));
  }

  dispense(): void {
    console.log('Select product first.');
  }
}

export class SoldCoin implements IState {
  private context: VendingMachine;

  constructor(context: VendingMachine) {
    this.context = context;
  }

  insert(): void {
    console.log('Please wait, dispensing product.');
  }

  eject(): void {
    console.log('Product already sold.');
  }

  select(): void {
    console.log('Product already selected.');
  }

  dispense(): void {
    console.log('Dispensing product.');
    this.context.setState(new NoCoin(this.context));
  }
}
