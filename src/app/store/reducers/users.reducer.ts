import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';

import { User } from 'src/app/models/user.model';
export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _userReducer = createReducer(usersInitialState,

    on(loadUsers, state => ({ ...state, loading: true })),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, loaded: true, users: [...users] })),
    on(loadUsersError, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload })),

);

export function userReducer(state, action) {
    return _userReducer(state, action);
}