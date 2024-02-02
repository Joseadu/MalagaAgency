import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  constructor(private route:Router, private service:UserService) {

  }

  ngOnInit(): void {
  }

  isAdmin: any;

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    // console.log(currentRoute);

    if(currentRoute == '/login') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }

    if(this.service.GetRole() == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  isMenuVisible = true;
}
