import { BaseColleague } from '../mediator.colleague';

export interface INotifyMediator {
  notify(sender: BaseColleague, event: string): void;
}
