import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers = (): Observable<any> =>
    this.http
      .get(`${this._url}/users?per_page=6`)
      .pipe(map(({data}: any) => data));
}
