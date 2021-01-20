import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import { loadUser } from 'src/app/store/actions';

import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User
  loading: boolean = false
  error: any
  userSubs: Subscription

  constructor(private router: ActivatedRoute, 
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user').subscribe(({ user, loading, error }) => {
      this.user = user
      this.loading = loading
      this.error = error
    })
    this.router.params.subscribe( ({ id }) => 
      this.store.dispatch(loadUser({ id }))
    )
  }

  
  ngOnDestroy(): void {
    this.error = null
    this.loading = false
    this.user = null
    this.userSubs.unsubscribe()
  }

}
