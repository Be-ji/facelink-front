import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";


const appRoutes: Routes = [
   
    { path: '', component: LoginComponent },
    { path: 'users', component: UsersComponent},
    { path: 'user/:id', component: UserComponent},
    { path: '', redirectTo:'/', pathMatch:'full' },
    { path: '**', redirectTo: '/' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);