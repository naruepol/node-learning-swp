import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../model/user-info';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { LoginResp } from '../model/login-resp';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthen = false;
  apiToken: string | null;
  session = localStorage;
  API_TOKEN = 'API_TOKEN';
  USER_INFO = 'USER_INFO';
  userInfo: UserInfo | null | undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.apiToken = this.session.getItem(this.API_TOKEN);
    if (this.apiToken) {
      this.isAuthen = true;
    }
    const json = this.session.getItem(this.USER_INFO);
    if (json) {
      this.userInfo = JSON.parse(json);
    }
  }

  login(login: Login): Observable<LoginResp> {
    return this.http
      .post<LoginResp>(`${environment.apiHost}/login`, login)
      .pipe(
        tap((resp) => {
          if (resp.token) {
            this.apiToken = resp.token;
            this.isAuthen = true;
            this.userInfo = resp.userInfo;
            this.session.setItem(this.API_TOKEN, this.apiToken);
            this.session.setItem(this.USER_INFO, JSON.stringify(this.userInfo));
          }
        })
      );
  }

  registerNewUser(user: User) {
    return this.http.post(`${environment.apiHost}/register`, user);
  }

  logout() {
    this.session.removeItem(this.API_TOKEN);
    this.session.removeItem(this.USER_INFO);
    this.isAuthen = false;
    this.router.navigate(['', 'home']);
  }
}
