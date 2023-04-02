import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignupAuthService } from 'src/app/services/auth/signup/signup-auth.service';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {
  constructor(private authService:SignupAuthService) {
   }

  ngOnInit(): void {
    this.authService.authService.authState.subscribe((googleUser) => {
      this.authService.SignUpWithGoogle(googleUser);
  });  
  }

  onClickSubmit(userForm: NgForm) {
    this.authService.SignUpWithForm(userForm);
  }

  onFacebookSignup() {
    this.authService.SignUpWithFB();
  }
}
