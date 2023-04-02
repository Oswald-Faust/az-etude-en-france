import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  SignOut() {
    this.http.get('http://localhost:3000/users/signout')
        .subscribe({
          next: (response:any) => {
            console.log(response);
            alert("Logout");
            window.location.href = '/contact';
          },
          error: (error:any) => console.log( error),
        });
  }
}
