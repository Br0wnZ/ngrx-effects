import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';

import { User } from 'src/app/models/user.model';
export interface UserState {
  id: string
  users: User[]
  loaded: boolean
  loading: boolean
  error: any
}

export const userInitialState: UserState = {
  id: null,
  users: null,
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  userInitialState,

  on(loadUser, (state, { id }) => ({ ...state, loading: true, id })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
  })),
  on(loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
        url: payload.url,
        nanme: payload.name,
        message: payload.message
    },
  }))
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
