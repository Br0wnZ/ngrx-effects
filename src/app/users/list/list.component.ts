import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

import { AppState } from 'src/app/store/app.reducers';
import { loadUsers } from 'src/app/store/actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  users: User[];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      (this.users = users), (this.loading = loading), (this.error = error);
    });
    this.store.dispatch(loadUsers());
    // this.userService.getUsers().subscribe( (users: User[]) => this.users = users )
  }
}
