import { CarBuilder } from './builder/car.builder';
import { CarDirector } from './builder/car.director';
import { Engine } from './builder/engine';
import { ICarBuilder } from './builder/interface/builder.interface';
import { IPaymentService } from './factory/interfaces/payment.interface';
import { PaymentFactory } from './factory/payment.factory';
import { Circle } from './prototype/circle';
import { ShapeClient } from './prototype/shape-client';

const desginPatternExample = {
  factory: () => {
    // Factory
    const shipCOD: IPaymentService = PaymentFactory.paymentCreator('COD');

    shipCOD.pay();
  },
  builder: () => {
    // Builder
    const builder: ICarBuilder = new CarBuilder();

    // build car manually
    const sportCar = builder.reset()
      .setEngine(new Engine('Sport'))
      .setSeat(2)
      .setGPS(true)
      .setComputer(true)
      .build();

    sportCar.run();
    sportCar.getCarInfo();

    // build car by director
    const director = new CarDirector();
    director.makeSUVCar(builder);
    const suvCar = builder.build();
    suvCar.run();
    suvCar.getCarInfo();
  },
  prototype: () => {
    const circle = new Circle('red', 40);

    const clonePrototype = new ShapeClient(circle);

    const cloneCircle = clonePrototype.createObject();

    cloneCircle.draw();
  }
};

