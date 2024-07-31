import _ from 'lodash';

import { IObserver } from './interfaces/observer';
import { ISubject } from './interfaces/subject';

export class Channel implements ISubject {
  private subscribers: Array<IObserver> = [];
  private news: string;

  constructor(_news: string = '') {
    this.news = _news;
  }

  setNews(news: string) {
    this.news = news;
    this.notify();
  }

  add(subscriber: IObserver): void {
    this.subscribers.push(subscriber);
  }

  remove(subscriber: IObserver): void {
    _.filter(this.subscribers, (sub: IObserver) => _.isEqual(sub, subscriber))
  }

  notify(): void {
    _.forEach(this.subscribers, (sub: IObserver) => sub.update(this.news));
  }
}
