import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit{

  services!:any
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    this.http.get('http://localhost:3000/users/services', httpOptions)
    .subscribe({
      next: (response:any) => {
        this.services = response
      },
      error: (error:any) => console.log( error),
    });
  }
}
