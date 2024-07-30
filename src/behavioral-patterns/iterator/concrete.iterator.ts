import { Book } from './book';
import { BookCollection } from './concrete.aggregate';
import { IIterator } from './interfaces/iterator.inteface';

export class BookIterator implements IIterator {
  private collection: BookCollection;
  private position: number = 0;

  constructor(collection: BookCollection) {
    this.collection = collection;
  }

  current(): Book | null {
    if (this.position < this.collection.getLength()) {
      return this.collection.getBookAt(this.position);
    }

    return null;
  }

  next(): Book | null {
    const book = this.current();
    this.position++;

    return book;
  }

  hasNext(): boolean {
    return this.position < this.collection.getLength();
  }
}
