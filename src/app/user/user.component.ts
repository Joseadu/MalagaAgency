import { Component, OnInit, ViewChild } from '@angular/core';
import { UserMasterService } from '../service/user-master.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../model/UserModel';
import { MatPaginator } from '@angular/material/paginator';
import { Sweetalert2Service } from 'src/app/service/sweetalert2.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../modals/edit-user/edit-user.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:UserMasterService, private sweetAlert2Service:Sweetalert2Service, private dialog:MatDialog) {
    
  }

  ngOnInit(): void {
    this.GetAllUser();
  }

  // Include MatPaginator
  @ViewChild(MatPaginator) paginator !: MatPaginator;


  UserDetail: any;
  dataSource: any;

  GetAllUser() {
    this.service.GetAllUser().subscribe(item => {
      this.UserDetail = item;

      this.dataSource = new MatTableDataSource<UserModel>(this.UserDetail);
      this.dataSource.paginator = this.paginator;
    });
  }

  functionEdit(userId: any) {
    let popup = this.dialog.open(EditUserComponent, {
      width: '400px',
      data: {
        userId: userId
      }
    });

    popup.afterClosed().subscribe(item => {
      this.GetAllUser();
    });
  }

  functionDelete(userId: any) {
    Swal.fire({
      title: "Delete user",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete"
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.service.RemoveUser(userId).subscribe(item => {
          this.GetAllUser();
    
          this.sweetAlert2Service.showNotification('User deleted successfuly');
        });
      }
    });
  }

  displayedColumns: string[] = ['userid', 'name', 'email', 'isActive', 'role', 'action'];

}
