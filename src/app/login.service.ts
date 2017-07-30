import { Injectable } from '@angular/core'
import { Headers, Response, Http, Jsonp, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user';

@Injectable()
export class LoginService {
  private loginUrl = 'http://localhost:9000/api/login/';
  private logoutUrl = 'http://localhost:9000/api/logout/';
  private login_status_url = 'http://localhost:9000/api/login_status/';

  constructor(
    private http: Http
  ) { }

  private headers = new Headers({
  'Content-Type': 'application/json'
  });
  private optional = new RequestOptions({headers: this.headers});

  login(user: User): Promise<any> {
    return this.http.post(
      this.loginUrl,
      JSON.stringify(user),
      this.headers
      )
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  logout(): Promise<any> {
    return this.http.post(
      this.logoutUrl,
      {},
      this.headers
    )
    .toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

/*  checkLoginStatus(): {
    return this.http.post(
      this.login_status_url,
      {},
      this.headers
    )
    .toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  } */

  private handleError(error: any): Promise<any> {
    console.error('API lookup error.', error);
    return Promise.reject(error.message || error);
  }
}
