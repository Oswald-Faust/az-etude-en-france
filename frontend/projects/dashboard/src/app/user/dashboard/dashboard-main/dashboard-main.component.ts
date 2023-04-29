import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit{

  services:any;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    this.http.get('http://localhost:3000/services/services', httpOptions)
    .subscribe({
      next: (response:any) => {
        console.log(response);
        this.services = response;
      },
      // error: (error:any) => window.location.href = '/sign-in',
      error: (error:any) => console.log(error),
    });
  }
}
