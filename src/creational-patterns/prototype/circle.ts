import { IShape } from './intefaces/shape.interface';

export class Circle implements IShape {
  private color: string;
  private radius: number;

  constructor(_color: string, _radius: number) {
    this.color = _color;
    this.radius = _radius;
  }

  clone(): IShape {
    return new Circle(this.color, this.radius);
  }

  draw(): void {
    console.log('Color: ', this.color, ' | ', 'radius: ', this.radius);
  }
};
