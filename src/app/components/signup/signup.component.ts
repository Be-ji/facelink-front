import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Utilisateur } from "../../models/utilisateur";
import { SignupService } from "../../services/signup/signup.service";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  utilisateur: Utilisateur = {
    id:0, 
    nom:'Burry',
    prenom:'Fred',
    motDePasse:'123',
    droit:0,
    email:'test@test.com',
    statut:'PDG',
    biographie:'Test bio',
    popularite:140,
    photo:'default.png',
    dateInscription:new Date(),
    dateNaissance: new Date()
    };

  constructor(private signupService: SignupService) { }

  addUser():void {
    this.signupService.createUser(this.utilisateur).subscribe(utilisateur => this.utilisateur = utilisateur);
  }
}