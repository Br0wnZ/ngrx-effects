import { Injectable } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';

import * as userActions from '../actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => userActions.loadUsersSuccess({ users })),
          catchError((err: Error) => of(userActions.loadUsersError({ payload: err })))
        )
      )
    )
  );
}
