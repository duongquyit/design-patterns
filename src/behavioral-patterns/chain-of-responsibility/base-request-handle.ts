import { IHanlder } from './intefaces/handle.interface';

export abstract class BaseRequestHandler implements IHanlder {
  protected nextHandler: IHanlder | null;

  constructor() {
    this.nextHandler = null;
  }

  setNextHandle(handle: IHanlder): void {
    this.nextHandler = handle;
  }

  handle(request: any): void {
    if (this.canRequest()) {
      this.processRequest(request);
    }

    if (this.nextHandler != null) {
      this.nextHandler.handle(request);
    }
  }

  abstract canRequest(): boolean;
  abstract processRequest(request: any): void;
}
