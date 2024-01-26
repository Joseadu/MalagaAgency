import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService, private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  respData:any;

  ProdceedLogin(loginData:any) {
    if(loginData.valid) {
      this.service.ProceedLogin(loginData.value).subscribe(item => {
        this.respData = item;

        if(this.respData != null){
          localStorage.setItem('token', this.respData.jwtTokken);
          // console.log(this.respdata)

          this.route.navigate(['home']);

        } else {
          //sweetalert2, implementar control de errores, preguntar chatgpt
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Login failed",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    };
  }

  RedirectRegister() {
    this.route.navigate(['access/register']);
  }

}
