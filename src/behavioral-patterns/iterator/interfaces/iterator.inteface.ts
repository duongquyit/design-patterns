export interface IIterator {
  current(): any;
  next(): any;
  hasNext(): boolean;
}
