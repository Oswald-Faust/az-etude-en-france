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
export class SignupAuthService {
  constructor(private http:HttpClient, public authService:SocialAuthService) { }
  SignUpWithForm(userForm: NgForm) {
    const userObject: User = {
      name: userForm.value.username,
      email: userForm.value.email,
      password: userForm.value.passwd1,
    };

    // envoyer une requete post au serveur qui fera une query sur la db afin de récupérer le user.
    this.SignUp(userObject);
  }

  SignUpWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((usr) => {
      const userObject:User = {
        email: usr.email,
        password: 'Haribo',
        name: usr.name,
      };

      this.SignUp(userObject)
    });
  }

  SignUpWithGoogle(googleUser:SocialUser) {
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
      this.http.post('http://localhost:3000/users/signup', userObject)
      .subscribe({
        next: (response:any) => {
          this.authService.signOut();
          console.log(response);
          alert("Signup successful !")
          // window.location.href = '/contact';
        },
        error: (error:any) => console.log( error),
      });
    } else {
      console.error('No user data to submit.');
    }
  }
}
