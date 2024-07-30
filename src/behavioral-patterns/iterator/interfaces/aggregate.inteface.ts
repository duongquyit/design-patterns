import { IIterator } from './iterator.inteface';

export interface IAggregate {
  createIterator(): IIterator;
}
