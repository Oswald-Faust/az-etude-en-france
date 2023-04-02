import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';

import { User } from 'src/app/helpers/types';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  constructor(private http:HttpClient, public authService:SocialAuthService) { }

  LoginWithForm(userForm: NgForm) {
    const userObject: User = {
      email: userForm.value.email,
      password: userForm.value.passwd,
      name: userForm.value.username,
    };

    // envoyer une requete post au serveur qui fera une query sur la db afin de récupérer le user.
    this.Login(userObject);
  }

  LoginWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((fbUser) => {
      const userObject:User = {
        email: fbUser.email,
        password: 'Haribo',
        name: fbUser.name,
      };

      this.Login(userObject);
    });
  }

  LoginWithGoogle(googleUser:SocialUser): void {
    const userObject:User = {
      email: googleUser.email,
      password: 'Haribo',
      name: googleUser.name,
    };
  
    this.Login(userObject);
  }

  Login(userObject: User) {
    if (userObject) {
      this.http.post('http://localhost:3000/users/login', userObject)
      .subscribe({
        next: (response:any) => {
          console.log(response);
          this.authService.signOut();
          alert("Login Successful !")
          // window.location.href = '/contact';
        },
        error: (error:any) => console.log( error),
      });  
    } else {
      console.error('No user data to submit.');
    }
  }
}
