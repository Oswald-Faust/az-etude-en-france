import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserType } from '../../../helpers/types';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onClickSubmit(userForm: NgForm) {
    const formData = new FormData();

    formData.append("name", userForm.value.username);
    formData.append("email", userForm.value.email);

    formData.append("password", userForm.value.passwd1);

    // envoyer une requete post au serveur qui fera une query sur la db afin de récupérer le user.
    // après, vous gérez comme vous voulez le login l'essentiel, c'est d'avoir le user qui se connecte.
 }
}
