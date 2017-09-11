import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Utilisateur } from "../../models/utilisateur";
import { SignupService } from "../../services/signup/signup.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  formUtilisateur : FormGroup;
  utilisateur : Utilisateur;

  ngOnInit() {
    this.formUtilisateur = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      motDePasse:new FormControl('', [Validators.required, Validators.minLength(4)]),
      email:new FormControl('', Validators.required)
    });

  }


 

  constructor(private signupService: SignupService) { }

  addUser():void {
    this.utilisateur = {
      motDePasse: this.formUtilisateur.controls['motDePasse'].value,
      email: this.formUtilisateur.controls['email'].value
  };
    this.signupService.createUser(this.utilisateur).subscribe(utilisateur => this.utilisateur = utilisateur);
  }
}