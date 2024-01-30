import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Sweetalert2Service } from 'src/app/service/sweetalert2.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService, private route:Router, private sweetAlert2Service:Sweetalert2Service) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  respData:any;

  ProdceedLogin(loginData:any) {
    if(loginData.valid) {
      this.service.ProceedLogin(loginData.value).subscribe(item => {
        this.respData = item;
        console.log(this.respData);

        if(this.respData != null){
          localStorage.setItem('token', this.respData.jwtTokken);
          this.route.navigate(['home']);
        } else {
          //sweetalert2, implementar control de errores, preguntar chatgpt
          this.sweetAlert2Service.showNotification('Login failed');
        }
      });
    };
  }

  RedirectRegister() {
    this.route.navigate(['access/register']);
  }

}
