import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http:HttpClient) { }

  apiUrl = "https://localhost:44321/api/UserMaster";

  GetAllUser () {
    return this.http.get(this.apiUrl);
  }

  GetUserById (userId: any) {
    return this.http.get(this.apiUrl + '/' + userId);
  }

  RemoveUser (userId: any) {
    return this.http.delete(this.apiUrl + '/' + userId);
  }

  UpdateUser (inputData: any) {
    return this.http.post(this.apiUrl + '/ActivateUser', inputData);
  }
}
