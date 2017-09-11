import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Utilisateur } from "../../models/utilisateur";
import { SignupService } from "../../services/signup/signup.service";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  formUtilisateur: FormGroup;
  utilisateur: Utilisateur;

  ngOnInit() {
    this.formUtilisateur = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      motDePasse: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.compose([Validators.required, this.emailFormatValidation, this.emailExisteValidation])]
    });

  }




  constructor(private signupService: SignupService, private fb: FormBuilder) { }

  addUser(): void {
    this.utilisateur = {
      prenom: this.formUtilisateur.controls['prenom'].value,
      nom: this.formUtilisateur.controls['nom'].value,
      email: this.formUtilisateur.controls['email'].value,
      motDePasse: this.formUtilisateur.controls['motDePasse'].value
    };
    this.signupService.createUser(this.utilisateur).subscribe(utilisateur => this.utilisateur = utilisateur);
  }

  emailFormatValidation(control: FormControl) {

    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { "incorrectEmailFormat": true };
    }
    return null;
  }

  emailExisteValidation() {
    this.signupService.checkEmail(this.formUtilisateur.controls['email'].value).subscribe(data => {
      if (data != "1") {
        console.log("email n'existe pas");
        return {"emailExistant" : true};
      } 
        console.log("email existe pas");
        return null;
    })
    return null;
  }
}
