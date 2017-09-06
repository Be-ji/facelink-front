import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
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
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'TousLesUtilisateurs', component: UtilisateurListeComponent}], {useHash: false})

  ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
