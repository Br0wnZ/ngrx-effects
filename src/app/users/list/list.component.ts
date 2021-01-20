import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

import { AppState } from 'src/app/store/app.reducers';
import { loadUsers } from 'src/app/store/actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../user/user.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      (this.users = users), (this.loading = loading), (this.error = error);
    });
    this.store.dispatch(loadUsers());
  }

  loadUserById = (id: string) => this.router.navigate(['/user', id])
}
