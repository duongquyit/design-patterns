import { ICommand } from './interfaces/command.interfaces';

export class DocumentManager {
  private command: ICommand | null;

  constructor() {
    this.command = null;
  }

  setCommand(_command: ICommand): void {
    this.command = _command;
  }

  executeCommand(): void {
    this.command?.execute();
  }
}
