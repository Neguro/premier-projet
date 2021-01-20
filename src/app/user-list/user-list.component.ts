import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService ) 
  { 
    this.users = [];
    this.userSubscription = new Subscription();
  }

  ngOnInit(): void 
  {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) =>
      {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() : void
  {
    this.userSubscription.unsubscribe();
  }

}
