import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
  }

  onClickSubmit(userForm: NgForm) {
    const formData = new FormData();

    if(userForm.value.pawwsd1 == userForm.value.pawwsd2){
      formData.append("name", userForm.value.username);
      formData.append("email", userForm.value.email);
  
      formData.append("password", userForm.value.passwd1);  
    }

    // on envoie une requête de type post au serveur pour lui fournir les informations sur le user qui arrive.
    // après, vous gérez le login comme vous voulez, l'essentiel est d'avoir les infos du user et tout va.
    this.http.post('http://localhost:3000/users', formData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log("failure" + error),
    });

  }
}
