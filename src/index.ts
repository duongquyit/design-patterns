import { CarBuilder } from './creational-patterns/builder/car.builder';
import { CarDirector } from './creational-patterns/builder/car.director';
import { Engine } from './creational-patterns/builder/engine';
import { ICarBuilder } from './creational-patterns/builder/interface/builder.interface';
import { IPaymentService } from './creational-patterns/factory/interfaces/payment.interface';
import { PaymentFactory } from './creational-patterns/factory/payment.factory';
import { Circle } from './creational-patterns/prototype/circle';
import { ShapeClient } from './creational-patterns/prototype/shape-client';
import { Database } from './creational-patterns/singleton/singleton';
import { FormatAdapter } from './structural-patterns/adapter/convert';

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
  },
  singleton: async () => {
    const db = await Database.getDatabase();
    const connection = await db.getConection();

    const data = await connection.query('SELECT * FROM users');
  },
  adapter: () => {
    const xml = "<foo attr=\"value\">bar</foo>";

    const adapter = new FormatAdapter();
    const jsonData = adapter.convertFromXMLToJSON(xml);
    const xmlData = adapter.convertFromJSONToXML(jsonData);

    console.log(jsonData);
    console.log(xmlData);
  }
};
