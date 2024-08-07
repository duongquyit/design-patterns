import {
  CheckUserExistsHandle,
  CheckUserPermissionHandler,
  CheckUserRoleHandler
} from './behavioral-patterns/chain-of-responsibility/request';
import { RedoCommand, UndoCommand, WriteCommand } from './behavioral-patterns/command/concrete-command';
import { Document } from './behavioral-patterns/command/receiver';
import { DocumentManager } from './behavioral-patterns/command/invoker';
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
import { BaseEmployee } from './structural-patterns/decorator/base-employee';
import { Manager, TeamLead, TeamMember } from './structural-patterns/decorator/employee';
import { ShopFacade } from './structural-patterns/facade/facade';
import { Book } from './behavioral-patterns/iterator/book';
import { BookCollection } from './behavioral-patterns/iterator/concrete.aggregate';
import { User } from './behavioral-patterns/mediator/user';
import { ChatRoom } from './behavioral-patterns/mediator/mediator.concrete';
import { Editor } from './behavioral-patterns/memento/memento.originator';
import { Snapshot } from './behavioral-patterns/memento/memento.caretaker';
import { Subscriber } from './behavioral-patterns/observer/observer.concrete';
import { Channel } from './behavioral-patterns/observer/subject.concrete';
import { VendingMachine } from './behavioral-patterns/state/state.context';
import { CreditCard, GooglePay, Paypal } from './behavioral-patterns/strategy/strategy.concrete';
import { ShoppingCart } from './behavioral-patterns/strategy/strategy.context';

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
  },
  decorator: () => {
    const employee = new BaseEmployee();

    const teamMember = new TeamMember(employee);
    const memberAndLeader = new TeamLead(teamMember);
    const leaderAndManager = new Manager(memberAndLeader);

    leaderAndManager.doTasks();
  },
  facade: () => {
    const shopFacade = ShopFacade.getInstance();

    shopFacade.buyProductByCashWithFreeShipping('email@gmail.com');
    shopFacade.buyProductByPaypalWithStandardShipping('email@gmail.com', '0123321123');
  },
  chainOfResponsibility: () => {
    const checkUserRole = new CheckUserRoleHandler();
    const checkUserPermission = new CheckUserPermissionHandler();
    const checkUserExists = new CheckUserExistsHandle();

    checkUserExists.setNextHandle(checkUserRole);
    checkUserRole.setNextHandle(checkUserPermission);

    checkUserExists.handle('');
  },
  command: () => {
    const document = new Document();
    const writeCommand = new WriteCommand(document, 'Hello');
    const undoCommand = new UndoCommand(document);
    const redoCommand = new RedoCommand(document);
    const documentManager = new DocumentManager();

    documentManager.setCommand(writeCommand);
    documentManager.executeCommand();

    writeCommand.setText('World!');
    documentManager.executeCommand();
    console.log(document.getText());

    documentManager.setCommand(undoCommand);
    documentManager.executeCommand();
    console.log(document.getText());

    documentManager.setCommand(redoCommand);
    documentManager.executeCommand();
    console.log(document.getText());
  },
  iterator: () => {
    // Client code
    const book1 = new Book("The Great Gatsby");
    const book2 = new Book("Moby Dick");
    const book3 = new Book("1984");

    const bookCollection = new BookCollection();
    bookCollection.addBook(book1);
    bookCollection.addBook(book2);
    bookCollection.addBook(book3);

    const iterator = bookCollection.createIterator();

    while (iterator.hasNext()) {
      const book = iterator.next();
      console.log(book.getTitle());
    }
  },
  mediator: () => {
    const user1 = new User('1', 'John');
    const user2 = new User('2', 'Tèo');
    const user3 = new User('3', 'Tủn');

    const chatRoom = new ChatRoom();

    chatRoom.add(user1);
    chatRoom.add(user2);
    chatRoom.add(user3);

    user1.sendMessage('Hello');
  },
  memento: () => {
    const editor = new Editor('Design');
    const snapshot = new Snapshot(editor);

    snapshot.makeSnapshot();
    editor.write('pattern');
    console.log(editor.getState());
    snapshot.undo();
    console.log(editor.getState());
  },
  observer: () => {
    const subscriber1 = new Subscriber();
    const subscriber2 = new Subscriber();
    const subscriber3 = new Subscriber();
    const musicChannel = new Channel();

    subscriber1.subscribe(musicChannel);
    subscriber2.subscribe(musicChannel);
    musicChannel.setNews('Không thể say - hieuthuhai');

    const gameChannel = new Channel();
    subscriber1.subscribe(gameChannel);
    subscriber3.subscribe(gameChannel);
    gameChannel.setNews('League of Legends');
  },
  state: () => {
    const vendingMachine = new VendingMachine();

    vendingMachine.select();
    vendingMachine.insert();
    vendingMachine.select();
  },
  strategy: () => {
    // NOTE: Can use factory pattern to create a payment method, it's depend on input and use the payment method into as algorithm in strategy
    const creditCard = new CreditCard('John', '123321123', '123', '20260801');
    const paypal = new Paypal('DOE');
    const googlePay = new GooglePay('noemail@example.com', '1');
    const cart = new ShoppingCart();

    cart.addItem({ name: 'Book', price: 100 });
    cart.addItem({ name: 'Pen', price: 20 });

    cart.pay(creditCard);
    cart.pay(paypal);
    cart.pay(googlePay);
  }
};

desginPatternExample.strategy();
