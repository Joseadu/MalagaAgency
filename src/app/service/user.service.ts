import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

  }
  ProceedLogin(inputData:any) {
    return this.http.post('https://localhost:44321/User/Authenticate', inputData);
  }

  TokenExist() {
    if(localStorage.getItem('token') == null) {
      return false;
    } else {
      return true;
    }
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

  GetRole() {
    var token = localStorage.getItem('token');
    if(token != null) {
      var extractdata = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
      return extractdata.role;
    } else {
      return '';
    }
  }
}
