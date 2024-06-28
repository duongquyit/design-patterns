import { IEmployee } from './interfaces/employee.interface';

export abstract class EmployeeDecorator implements IEmployee {
  decorator: IEmployee;

  constructor(_decorator: IEmployee) {
    this.decorator = _decorator;
  }

  doTasks(): void {
    this.decorator.doTasks();
  }
}
