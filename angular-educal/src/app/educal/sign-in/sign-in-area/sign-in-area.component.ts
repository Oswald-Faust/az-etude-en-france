import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(userForm: NgForm) {
    const formData = new FormData();

    formData.append("email", userForm.value.email);
    formData.append("password", userForm.value.passwd);

    // envoyer une requete post au serveur qui fera une query sur la db afin de récupérer le user.
    this.http.post('http://localhost:3000/api/login', formData)
    .subscribe({
      next: (response:any) => {
        console.log(response);
        window.location.href = '/contact';
      },
      error: (error:any) => console.log( error),
    });



 }
}
