
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Utilisateur } from "../../models/utilisateur";

@Injectable()
export class UsersService {
  
  url:string ='http://localhost:8080/users';
  
  constructor(private http: Http) { }
  
  getUsers():Observable<Utilisateur[]> {
     return this.http.get(this.url)
      .map((response: Response) => response.json());
  }

}