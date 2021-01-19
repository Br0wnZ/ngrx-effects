import { Injectable } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap, tap } from 'rxjs/operators';

import * as userActions from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe( map(users => userActions.loadUsersSuccess({ users })) )
      )
    )
  );
}
