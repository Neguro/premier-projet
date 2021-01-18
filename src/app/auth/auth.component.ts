import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  constructor(private authService: AuthService, private routeur: Router) { 
    this.authStatus = false; 
  }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
  
  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log('Connexion réussi !');
        this.authStatus = this.authService.isAuth;
        this.routeur.navigate(['appareils']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut;
    this.authStatus = this.authService.isAuth;
  }
}
