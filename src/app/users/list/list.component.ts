import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe( ({users}) => this.users = users)
    this.store.dispatch(loadUsers())
    // this.userService.getUsers().subscribe( (users: User[]) => this.users = users )
  }

}
