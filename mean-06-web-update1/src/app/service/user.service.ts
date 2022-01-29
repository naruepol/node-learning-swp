import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { LoginResp } from '../model/login-resp';
import { User } from '../model/user';
import { UserFilter } from '../model/user-filter';
import { UserFilterResp } from '../model/user-filter-resp';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post(`${environment.apiHost}/user`, user);
  }

  filter(_filter: UserFilter) {
    const params = new HttpParams()
      .set('code', _filter.code)
      .set('active', _filter.active)
      .set('name', _filter.name)
      .set('email', _filter.email)
      .set('role', _filter.role);

    return this.http.get<UserFilterResp[]>(`${environment.apiHost}/user`, {
      params,
    });
  }

  active(userId: number, active: string) {
    return this.http.put(
      `${environment.apiHost}/user/active/${userId}/${active}`,
      null
    );
  }

  delete(userId: number) {
    return this.http.delete(`${environment.apiHost}/user/${userId}`);
  }

  getUserById(userId: number) {
    return this.http.get<User>(`${environment.apiHost}/user/${userId}`);
  }

  updateUser(userId: number, user: User) {
    return this.http.put(`${environment.apiHost}/user/${userId}`, user);
  }
}
