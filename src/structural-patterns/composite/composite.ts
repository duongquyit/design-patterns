import { EmployeeLeaf } from './employee';
import { IEmployee } from './interfaces/employee.interface';

export class ManagerComposite implements IEmployee {
  emloyees: Array<EmployeeLeaf>;

  constructor() {
    this.emloyees = new Array<EmployeeLeaf>();
  }

  add(_employee: EmployeeLeaf | Array<EmployeeLeaf>) {
    if (Array.isArray(_employee)) {
      _employee.forEach((e) => {
        this.emloyees.push(e);
      });
    } else {
      this.emloyees.push(_employee);
    }
  };

  remove(_employee: EmployeeLeaf) {
    this.emloyees = this.emloyees.filter((e) => e.name !== _employee.name && e.position !== _employee.position);
  };

  getDetails() {
    this.emloyees.forEach((e) => {
      console.log(e.getDetails());
    });
  };
}
