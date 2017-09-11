import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../../models/utilisateur";
import { UserService } from "../../services/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  utilisateur : Utilisateur;
  constructor(private route: ActivatedRoute, private service:UserService, private router:Router) {
    
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getUser(id).subscribe(utilisateur => this.utilisateur = utilisateur);
  }

  onBack(): void {
    this.router.navigate(['/users'])
  }

}