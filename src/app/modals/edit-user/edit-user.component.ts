import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserMasterService } from 'src/app/service/user-master.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service:UserMasterService, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.GetAllRoles();
    this.GetExistData(this.data.userId);
  }

  roleData: any;
  editData: any;

  updateUserForm = new FormGroup({
    userid: new FormControl(""),
    role: new FormControl("", Validators.required),
    isActive: new FormControl("", Validators.required)
  });

  GetAllRoles() {
    this.service.GetAllRoles().subscribe(item => {
      this.roleData = item;
      console.log(this.roleData);
    })
  }

  GetExistData(userid: any) {
    this.service.GetUserById(userid).subscribe(item => {
      this.editData = item;
      console.log(this.editData);

      if(this.editData != null){
        this.updateUserForm.setValue({
          userid:this.editData.userid,
          role:this.editData.role,
          isActive:this.editData.isActive
        });
      }
    });
  }

  updateUser() {

  }
}
