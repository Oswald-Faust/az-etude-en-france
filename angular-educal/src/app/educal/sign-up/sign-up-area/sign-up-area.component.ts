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
    this.submit(userForm);
    console.log(userForm);

  }

  submit(userForm:NgForm){
        // if(userForm.value.pawwsd1 === userForm.value.pawwsd2){
          const formData = new FormData();

          formData.append("name", userForm.value.username);
          formData.append("email", userForm.value.email);
          formData.append("password", userForm.value.passwd1);  
    
          // on envoie une requête de type post au serveur pour lui fournir les informations sur le user qui arrive.
          this.http.post('http://localhost:3000/api/signup', formData)
          .subscribe({
            next: (response:any) => {
              console.log(response);
              window.location.href = '/contact';
            },
            error: (error:any) => console.log( error),
          });
    
        // } else {
        //   console.log("Fuck unequal passwords");
        // }    
  }

  signUpWithGoogle() {
    console.log("Fuck !")
  }
}
