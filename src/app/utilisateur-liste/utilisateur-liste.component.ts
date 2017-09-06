import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../models/utilisateur";
import { UtilisateurService } from "../services/utilisateur.service";


@Component({
  selector: 'utilisateur-liste',
  templateUrl: './utilisateur-liste.component.html',
  styleUrls: ['./utilisateur-liste.component.css']
})
export class UtilisateurListeComponent implements OnInit {

   utilisateurs : Utilisateur[];
  constructor(private _service:UtilisateurService) { }

  ngOnInit() {
    this._service.getUtilisateurs().subscribe(u =>this.utilisateurs =u);
  }


}
