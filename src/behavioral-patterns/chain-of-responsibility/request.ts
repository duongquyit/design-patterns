import { BaseRequestHandler } from './base-request-handle';

export class CheckUserRoleHandler extends BaseRequestHandler {
  canRequest(): boolean {
    return true;
  }

  processRequest(request: any): void {
    console.log('Handler check user role!');
  }
}

export class CheckUserPermissionHandler extends BaseRequestHandler {
  canRequest(): boolean {
    return true;
  }

  processRequest(request: any): void {
    console.log('Handler check user permission!');
  }
}

export class CheckUserExistsHandle extends BaseRequestHandler {
  canRequest(): boolean {
    return true;
  }

  processRequest(request: any): void {
    console.log('Handler check user exists!');
  }
}
