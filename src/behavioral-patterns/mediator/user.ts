import { BaseColleague } from './mediator.colleague';

// Colleague
export class User extends BaseColleague{
  public id: string;
  public name: string;

  constructor(_id: string, _name: string) {
    super();
    this.id = _id;
    this.name = _name;
  };

  sendMessage(message: string): void {
    this.mediator?.notify(this, message);
  }

  receiveMessage(message: string): void {
    console.log(`User ${this.id} receive: ${message}`);
  }
}
