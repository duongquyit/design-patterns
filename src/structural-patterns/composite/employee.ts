import { IEmployee } from './interfaces/employee.interface';

export class EmployeeLeaf implements IEmployee {
  name: string;
  position: string;

  constructor(_name: string, _position: string) {
    this.name = _name;
    this.position = _position;
  }

  getDetails() {
    return `My name is ${this.name}, and position is ${this.position}`;
  }
}
