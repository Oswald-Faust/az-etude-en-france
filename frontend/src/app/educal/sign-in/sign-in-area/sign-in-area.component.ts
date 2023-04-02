import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAuthService } from 'src/app/services/auth/login/login-auth.service';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {
  constructor(private http:HttpClient, private authService: LoginAuthService) { }

  ngOnInit(): void {
    this.authService.authService.authState.subscribe((googleUser) => {
      this.authService.LoginWithGoogle(googleUser);
  });  
  }

  onClickSubmit(userForm: NgForm) {
    this.authService.LoginWithForm(userForm);
  }

  onFacebookSignin() {
    this.authService.LoginWithFB();
  }
}
