import { Engine } from './engine';

export class Car {
  engine: Engine;
  seat: number;
  hasGPS: boolean;
  hasComputer: boolean;

  constructor(_car: Car | any = {}) {
    this.engine = _car.engine;
    this.seat = _car.seat;
    this.hasGPS = _car.hasGPS;
    this.hasComputer = _car.hasComputer;
  }

  run() {
    console.log('Run Run...');
  }

  getCarInfo(): void {
    console.log('<---------- The car information ---------->');
    console.log('\tEngine: ', this.engine);
    console.log('\tSeats: ', this.seat);
    console.log('\tComputer: ', this.hasComputer);
    console.log('\tHasGPS: ', this.hasGPS);
    console.log('<---------- ------------------- ---------->');
  }
}
