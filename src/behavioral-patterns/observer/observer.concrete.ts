import { IObserver } from './interfaces/observer';
import { ISubject } from './interfaces/subject';

export class Subscriber implements IObserver {
  private amountOfNotification: number;

  constructor() {
    this.amountOfNotification = 0;
  }

  getAmountOfNotification(): number {
    return this.amountOfNotification;
  }

  update(change: any): void {
    this.amountOfNotification++;
    console.log(this.amountOfNotification);
  }

  subscribe(channel: ISubject) {
    channel.add(this);
  }

  unSubscribe(channel: ISubject) {
    channel.remove(this);
  }
}
