import { Car } from './car';
import { Engine } from './engine';
import { ICarBuilder } from './interface/builder.interface';

export class CarBuilder implements ICarBuilder {
  car: Car;

  constructor() {
    this.car = new Car();
  }

  reset(): ICarBuilder {
    this.car = new Car();

    return this;
  }

  setEngine(_engine: Engine): ICarBuilder {
    this.car.engine = _engine;

    return this;
  };

  setSeat(_seatAmount: number): ICarBuilder {
    this.car.seat = _seatAmount;

    return this;
  };

  setGPS(_isSet: boolean): ICarBuilder {
    this.car.hasGPS = _isSet;

    return this;
  };

  setComputer(_isSet: boolean): ICarBuilder {
    this.car.hasComputer = _isSet;

    return this;
  };

  build(): Car {
    const product: Car = new Car(this.car);
    this.reset;

    return product;
  };
}
