import { Component, OnInit } from '@angular/core';

import { User } from './user';

import { LoginService } from './login.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
  './login-form.component.css'
  ]
})
export class LoginFormComponent {
  constructor(
    private loginService: LoginService
  ) { }
  user = new User('', '');
  loginMessage: any = "not logged in."; //starts out a string, but HttpResponse returns an object
  loggedIn: boolean = false;
  activate: boolean;

  onSubmit(): void {
    this.loginService.login(this.user)
      .then( message => {
        this.loginMessage = message._body;
        console.log(this.loginMessage);
        if (this.loginMessage === "User is currently logged in.") { //after backend is refined, improve this logic.
          this.loggedIn = true;
        } else { this.loggedIn = false}
      })
  }

  logOut(): void{
    this.loginService.logout()
      .then( () => this.loggedIn = false );
  }

}
