export class Book {
  private title: string;

  constructor(_title: string) {
    this.title = _title;
  }

  getTitle(): string {
    return this.title;
  }
}
