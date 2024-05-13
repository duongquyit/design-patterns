import { Car } from './car';
import { Engine } from './engine';
import { ICarBuilder } from './interface/builder.interface';

const ENGINE_TYPE = Object.freeze({
  SPORT: 'Sport',
  SUV: 'SUV',
});

export class CarDirector {
  constructor() {}

  makeSportCar(builder: ICarBuilder): ICarBuilder {
    builder.reset();
    builder.setEngine(new Engine(ENGINE_TYPE.SPORT));
    builder.setSeat(2);
    builder.setGPS(true);
    builder.setComputer(false);

    return builder;
  }

  makeSUVCar(builder: ICarBuilder): ICarBuilder {
    builder.reset();
    builder.setEngine(new Engine(ENGINE_TYPE.SUV));
    builder.setSeat(4);
    builder.setGPS(true);
    builder.setComputer(true);

    return builder;
  }
}
