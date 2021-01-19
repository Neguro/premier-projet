import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  userSubject: Subject<User[]> = new Subject<User[]>()
  constructor() {
  }

  emitUsers() : void
  {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User)
  {
    this.users.push(user);
    this.emitUsers();
  }
}
