import { Injectable } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';

import * as userActions from '../actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap(({ id }) =>
      id ?
        this.userService.getUserById( id ).pipe(
          map((user) => userActions.loadUserSuccess({ user })),
          catchError((err: Error) => of(userActions.loadUserError({ payload: err })))
        ) : of(userActions.loadUserError({ payload: '' }))
      )
    )
  );
}
