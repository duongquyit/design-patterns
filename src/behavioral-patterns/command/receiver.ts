export class Document {
  private text: string;
  private textUndoStack: Array<string | undefined>;
  private textRedoStack: Array<string | undefined>;


  constructor(_text: string = '') {
    this.text = _text;
    this.textUndoStack = [_text];
    this.textRedoStack = [];
  }

  write(_text: string): void {
    this.text = `${this.getText()} ${_text}`;
    this.textUndoStack.push(_text);
  }

  undo(): void {
    const lastUndoItem = this.textUndoStack.pop();

    if (lastUndoItem) {
      this.textRedoStack.push(lastUndoItem)
    }

    this.text = this.textUndoStack.join(' ');
  }

  redo(): void {
    const lastRedoItem = this.textRedoStack.pop();

    if (lastRedoItem) {
      this.textUndoStack.push(lastRedoItem)
    }

    this.text = `${this.text} ${lastRedoItem}`;
  }

  getText(): string {
    return this.text.trim();
  }
}
