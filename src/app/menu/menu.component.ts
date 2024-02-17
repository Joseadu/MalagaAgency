import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  constructor(private route:Router, private service:UserService) {
    this.tokenExist;
  }

  ngOnInit(): void {
  }

  isAdmin: any;
  tokenExist: any;
  isMenuVisible = true;

  ngDoCheck(): void {
    const currentRoute = this.route.url;

    if(currentRoute == '/login' || currentRoute == '/access/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }

    if(this.service.GetRole() == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    if(this.service.TokenExist() == true) {
      this.tokenExist = true;
    } else {
      this.tokenExist = false;
    }
  }
  
  Logout() {
    localStorage.clear();
    this.route.navigate(['home']);
  }
}
