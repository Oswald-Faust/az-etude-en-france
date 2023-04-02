import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { User } from 'src/app/helpers/types';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {
  public googleProvider = GoogleLoginProvider.PROVIDER_ID;

  user!: SocialUser;
  loggedIn?: boolean;

  constructor(private http: HttpClient, private authService:SocialAuthService) {
   }

  ngOnInit(): void {
    this.authService.authState.subscribe((googleUser) => {
      this.signUpWithGoogle(googleUser);
    });
  }

  onClickSubmit(userForm: NgForm) {
    const userObject: User = {
      email: userForm.value.email,
      password: userForm.value.passwd,
      name: userForm.value.name,
    };

    // envoyer une requete post au serveur qui fera une query sur la db afin de récupérer le user.
    this.SignUp(userObject);
  }

  signUpWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((usr) => {
      const userObject:User = {
        email: usr.email,
        password: 'Haribo',
        name: usr.name,
      };
    
      this.SignUp(userObject)
    });
  }

  signUpWithGoogle(googleUser:SocialUser) {
    const userObject:User = {
      email: googleUser.email,
      password: 'Haribo',
      name: googleUser.name,
    };
  
    this.SignUp(userObject);
  }

  SignUp(userObject:User){
    if(userObject) {
      // on envoie une requête de type post au serveur pour lui fournir les informations sur le user qui arrive.
      this.http.post('http://localhost:3000/api/signup', userObject)
      .subscribe({
        next: (response:any) => {
          console.log(response);
          window.location.href = '/contact';
        },
        error: (error:any) => console.log( error),
      });
    } else {
      console.error('No user data to suubmit.');
    }
  }
}
