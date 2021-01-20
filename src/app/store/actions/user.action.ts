import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[Users] loadUsers',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] loadUserSuccess',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User] loadUserError',
  props<{ payload: any }>()
);