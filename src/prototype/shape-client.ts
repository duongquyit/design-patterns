import { IShape } from './intefaces/shape.interface';

export class ShapeClient {
  private prototypeObject: IShape;

  constructor(_shape: IShape) {
    this.prototypeObject = _shape;
  };

  createObject(): IShape {
    return this.prototypeObject.clone();
  }
}
