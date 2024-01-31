import { Component, OnInit, ViewChild } from '@angular/core';
import { UserMasterService } from '../service/user-master.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../model/UserModel';
import { MatPaginator } from '@angular/material/paginator';

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

  constructor(private service:UserMasterService) {
    
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

      // console.log(this.UserDetail);
      this.dataSource = new MatTableDataSource<UserModel>(this.UserDetail);
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = ['userid', 'name', 'email', 'isActive', 'role', 'action'];

}
