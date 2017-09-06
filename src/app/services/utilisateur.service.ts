
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Utilisateur } from "../models/utilisateur";

@Injectable()
export class UtilisateurService {
  
  url:string ='http://localhost:8080/TousLesUtilisateurs';
  
  constructor(private http: Http) { }
  
  getUtilisateurs():Observable<Utilisateur[]> {

     return this.http.get(this.url)
      .map((response: Response) => response.json());
  }

}