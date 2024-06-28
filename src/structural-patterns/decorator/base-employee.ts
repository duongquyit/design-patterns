import { IEmployee } from './interfaces/employee.interface';

export class BaseEmployee implements IEmployee {
  doTasks(): void {
    console.log('Employee handle tasks');
  }
}
