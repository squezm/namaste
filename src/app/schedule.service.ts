import { Injectable } from '@angular/core';
import { Headers, Response, Http, Jsonp, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Flow } from './schedule';

@Injectable()
export class ScheduleService {
  private scheduleUrl = 'api/flows';
  private databaseUrl = 'http://localhost:9000/api/flows/'

  constructor(private http: Http) { }

  getFlows(): Promise<Flow[]> {
    return this.http.get(this.databaseUrl)
      .toPromise()
      .then(response => response.json() as Flow[])
      //.then(response => response.json().data as Flow[])
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-type': 'application/json'});

  create(flow: Flow): Promise<any> {
    return this.http
    .post(
      this.scheduleUrl,
      JSON.stringify({flow}),
      {headers: this.headers}
      )
    .toPromise()
    .then(res => {
    res.json().data as Flow;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('API lookup error.', error);
    return Promise.reject(error.message || error);
  }
}
