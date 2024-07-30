import { INotifyMediator } from './interfaces/mediator.interface';
import { User } from './user';

export class ChatRoom implements INotifyMediator {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  add(user: User): void {
    this.users.push(user);
    user.setMediator(this);
  }

  notify(sender: User, event: string): void {
    this.users.forEach(u => {
      if (u.id !== sender.id) {
        u.receiveMessage(event);
      }
    })
  }
}
