import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent  implements OnInit{

  userData!:object
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    this.http.get('http://localhost:3000/users/infos', httpOptions)
    .subscribe({
      next: (response:any) => {
        this.userData = response;
        console.log(this.userData);
      },
      error: (error:any) => console.log( error),
    });
  }
}
