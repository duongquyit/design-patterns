import { Document } from './receiver';
import { ICommand } from './interfaces/command.interfaces';

export class WriteCommand implements ICommand {
  private document: Document;
  private text: string;

  constructor(_document: Document, _text: string = '') {
    this.document = _document;
    this.text = _text;
  }

  setText(_text: string) {
    this.text = _text;
  }

  execute(): void {
    this.document.write(this.text);
  }
}

export class UndoCommand implements ICommand {
  private document: Document;

  constructor(_document: Document) {
    this.document = _document;
  }

  execute(): void {
    this.document.undo();
  }
}

export class RedoCommand implements ICommand {
  private document: Document;

  constructor(_document: Document) {
    this.document = _document;
  }

  execute(): void {
    this.document.redo();
  }
}

