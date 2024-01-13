import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  constructor(private route:Router) {

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    // console.log(currentRoute);

    if(currentRoute == '/login') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  isMenuVisible = true;
}
