import { EmployeeDecorator } from './employee-decorator';
import { IEmployee } from './interfaces/employee.interface';

export class TeamMember extends EmployeeDecorator {
  constructor(decorator: IEmployee) {
    super(decorator);
  }

  doTasks(): void {
    this.decorator.doTasks();
    this.report();
  }

  report(): void {
    console.log('Make the report');
  }
}

export class TeamLead extends EmployeeDecorator {
  constructor(decorator: IEmployee) {
    super(decorator);
  }

  doTasks(): void {
    this.decorator.doTasks();
    this.assignTask();
  }

  assignTask(): void {
    console.log('Assign task for team members');
  }
}

export class Manager extends EmployeeDecorator {
  constructor(decorator: IEmployee) {
    super(decorator);
  }

  doTasks(): void {
    this.decorator.doTasks();
    this.manageSchedule();
  }

  manageSchedule(): void {
    console.log('Manage schedule');
  }
}
