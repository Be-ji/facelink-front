import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";

import { AppComponent } from './app.component';

import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

import { UsersService } from "./services/users/users.service";
import { UserService } from "./services/user/user.service";

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    UsersComponent,
    LoginComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UsersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
