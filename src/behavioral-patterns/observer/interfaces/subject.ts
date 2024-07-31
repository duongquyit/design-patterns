import { IObserver } from './observer';

export interface ISubject {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}
