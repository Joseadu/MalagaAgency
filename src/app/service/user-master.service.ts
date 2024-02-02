import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http: HttpClient) { }
  apiUrlUserMaster = 'https://localhost:44321/api/UserMaster';
  apiUrlGetAllRole = 'https://localhost:44321/User/GetAllRole';

  GetAllUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrlUserMaster);
  }

  GetAllRoles() {
    return this.http.get(this.apiUrlGetAllRole);
  }

  GetUserById(UserId: any) {
    return this.http.get(this.apiUrlUserMaster + '/' + UserId);
  }

  RemoveUser(UserId: any) {
    return this.http.delete(this.apiUrlUserMaster + '/' + UserId);
  }


  UpdateUser(inputdata: any) {
    return this.http.post(this.apiUrlUserMaster + '/ActivateUser', inputdata);
  }


}