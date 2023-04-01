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
      this.socialUser = user;
      this.loggedIn = (user != null);
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

  Login(user: User) {
    if (user) {
      this.http.post('http://localhost:3000/api/login', user)
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

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((usr) => {

      const userObject:User = {
        email: usr.email,
        password: 'Haribo',
        name: usr.name,
      };
    
      this.Login(userObject)
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAccessToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((usr) => {
      console.log(usr);
    });
  }
}
