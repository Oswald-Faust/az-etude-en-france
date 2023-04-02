import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { User } from 'src/app/helpers/types';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  private accessToken = '';
  socialUser!: SocialUser;
  loggedIn?: boolean;

  constructor(private http:HttpClient, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.signInWithGoogle(user);
    });
  }

  onClickSubmit(userForm: NgForm) {
    const userObject: User = {
      email: userForm.value.email,
      password: userForm.value.passwd,
      name:''
    };

    // envoyer une requete post au serveur qui fera une query sur la db afin de récupérer le user.
    this.Login(userObject);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((fbUser) => {

      const userObject:User = {
        email: fbUser.email,
        password: 'Haribo',
        name: fbUser.name,
      };
    
      this.Login(userObject);
    });
  }

  signInWithGoogle(googleUser:SocialUser): void {
    const userObject:User = {
      email: googleUser.email,
      password: 'Haribo',
      name: googleUser.name,
    };
  
    this.Login(userObject)
  }

  Login(userObject: User) {
    if (userObject) {
      this.http.post('http://localhost:3000/api/login', userObject)
      .subscribe({
        next: (response:any) => {
          console.log(response);
          window.location.href = '/contact';
        },
        error: (error:any) => console.log( error),
      });  
    } else {
      console.error('No user data to submit.');
    }
  }
}
