import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sweetalert2Service } from 'src/app/service/sweetalert2.service';
import { UserMasterService } from 'src/app/service/user-master.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service:UserMasterService, @Inject(MAT_DIALOG_DATA) public data:any, private SweetAlert2: Sweetalert2Service, private ref:MatDialogRef<EditUserComponent>) { }

  ngOnInit(): void {
    this.GetAllRoles();
    this.GetExistData(this.data.userId);
  }

  roleData: any;
  editData: any;
  saveData: any;

  updateUserForm = new FormGroup({
    userid: new FormControl({value:"", disabled: true}),
    role: new FormControl("", Validators.required),
    isActive: new FormControl("", Validators.required)
  });

  GetAllRoles() {
    this.service.GetAllRoles().subscribe(item => {
      this.roleData = item;
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

  SaveUser() {
    if(this.updateUserForm.valid){
      this.service.UpdateUser(this.updateUserForm.getRawValue()).subscribe(item => {
        this.saveData = item;
        if(this.saveData.result == 'pass') {
          this.SweetAlert2.showNotification('User edited successfully');
          this.ref.close();
        } else {
          this.SweetAlert2.showErrorNotification('There was an error');
        }
      });
    }
  }
}
