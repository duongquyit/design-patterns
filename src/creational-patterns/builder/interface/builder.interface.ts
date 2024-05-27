import { Car } from '../car';
import { Engine } from '../engine';

export interface ICarBuilder {
  reset: () => ICarBuilder;
  setEngine: (engine: Engine) => ICarBuilder;
  setSeat: (seatAmount: number) => ICarBuilder;
  setGPS: (isSet: boolean) => ICarBuilder;
  setComputer: (isSet: boolean) => ICarBuilder;
  build: () => Car;
}
