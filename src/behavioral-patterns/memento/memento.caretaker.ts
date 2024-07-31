import { Memento } from './memento';
import { Editor } from './memento.originator';

export class Snapshot {
  private history: Array<Memento> = [];
  private originator: Editor;

  constructor(_originator: Editor) {
    this.originator = _originator;
  }

  makeSnapshot(): void {
    this.history.push(this.originator.save());
  }

  undo(): void {
    if (this.history.length) {
      const memento = this.history.pop();
      this.originator.restore(memento as Memento);
    }
  }
}
