import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurListeComponent } from "./utilisateur-liste/utilisateur-liste.component";
import { UtilisateurService } from "./services/utilisateur.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent, 
    UtilisateurListeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
