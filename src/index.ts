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
import { BasicChararater, Character } from './structural-patterns/bridge/character';
import { Warrior } from './structural-patterns/bridge/clan';
import { ManagerComposite } from './structural-patterns/composite/composite';
import { EmployeeLeaf } from './structural-patterns/composite/employee';

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
  },
  bridge: () => {
    const warriorCharacter: Character = new BasicChararater('QND', 1, new Warrior());

    console.log(warriorCharacter.getClan());
  },
  composite: () => {
    const engineer1 = new EmployeeLeaf('Quy', 'Backend Engineer');
    const engineer2 = new EmployeeLeaf('Linh', 'Backend Engineer');
    const engineer3 = new EmployeeLeaf('Thuan', 'Backend Engineer');
    const engineer4 = new EmployeeLeaf('Phuc', 'Backend Engineer');
    const engineer5 = new EmployeeLeaf('Nhat', 'Frontend Engineer');
    const engineer6 = new EmployeeLeaf('Dat', 'Frontend Engineer');

    const manager = new ManagerComposite();
    console.log('--------- Before ----------------');
    manager.getDetails();

    console.log('--------- After ----------------');
    manager.add([engineer1, engineer2, engineer3, engineer4, engineer5, engineer6]);
    manager.getDetails();
  }
};

