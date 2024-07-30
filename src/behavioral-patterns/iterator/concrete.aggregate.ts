import { Book } from './book';
import { BookIterator } from './concrete.iterator';
import { IAggregate } from './interfaces/aggregate.inteface';
import { IIterator } from './interfaces/iterator.inteface';

export class BookCollection implements IAggregate {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  getLength(): number {
    return this.books.length;
  }

  createIterator(): IIterator {
    return new BookIterator(this);
  }
}
