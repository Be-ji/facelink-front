import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../../models/utilisateur";
import { UsersService } from "../../services/users/users.service";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  utilisateurs : Utilisateur[];
  constructor(private service:UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(u =>this.utilisateurs =u);
  }

}
