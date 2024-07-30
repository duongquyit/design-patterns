import { INotifyMediator } from './interfaces/mediator.interface';

export abstract class BaseColleague {
  protected mediator: INotifyMediator | null;

  constructor(_mediator: INotifyMediator | null = null) {
    this.mediator = _mediator;
  }

  setMediator(_mediator: INotifyMediator) {
    this.mediator = _mediator;
  }

  abstract sendMessage(message: string): void;
  abstract receiveMessage(message: string): void;
}
