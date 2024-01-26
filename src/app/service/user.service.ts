import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

  }

  ProceedLogin(inputData:any) {
    return this.http.post('https://localhost:44321/User/Authenticate', inputData);
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('token'):'';
  }

  UserRegistration(inputData: any) {
    return this.http.post('https://localhost:44321/User/Register', inputData);
  }
}
