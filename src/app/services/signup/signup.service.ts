import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Utilisateur } from "../../models/utilisateur";
import { FormGroup } from "@angular/forms";

@Injectable()
export class SignupService {
  url: string = 'http://localhost:8080/signup';

  constructor(private http: Http) { }

  createUser(utilisateur: Utilisateur): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.url, utilisateur, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

