import { CarBuilder } from './creational-patterns/builder/car.builder';
import { CarDirector } from './creational-patterns/builder/car.director';
import { Engine } from './creational-patterns/builder/engine';
import { ICarBuilder } from './creational-patterns/builder/interface/builder.interface';
import { IPaymentService } from './creational-patterns/factory/interfaces/payment.interface';
import { PaymentFactory } from './creational-patterns/factory/payment.factory';
import { Circle } from './creational-patterns/prototype/circle';
import { ShapeClient } from './creational-patterns/prototype/shape-client';

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

