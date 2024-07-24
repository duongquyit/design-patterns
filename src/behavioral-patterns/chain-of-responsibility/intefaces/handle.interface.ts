export interface IHanlder {
  setNextHandle(handle: IHanlder): void;
  handle(request: any): void;
}
