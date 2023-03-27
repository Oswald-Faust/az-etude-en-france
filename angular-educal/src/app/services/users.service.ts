import { Injectable } from '@angular/core';
//Import http client
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserType } from '../helpers/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  async login(user: UserType) {
    let base_url: string = environment.base_url;

    this.http.post(base_url + '/users', user).subscribe({
      next: (data) => console.log(data),
      error: (error: any) => console.log(error),
    });
  }
}
