import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Sweetalert2Service } from 'src/app/service/sweetalert2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router, private service:UserService, private sweetAlert2Service:Sweetalert2Service) { }

  respData: any;

  ngOnInit(): void {
  }

  RedirectLogin() {
    this.route.navigate(['login']);
  }

  reactiveForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    name: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('',  Validators.required),
  });

  SaveUser() {
    // console.log(this.reactiveForm.value);
    if(this.reactiveForm.valid) {
      this.service.UserRegistration(this.reactiveForm.value). subscribe(item => {
        this.respData = item;

        if(this.respData.result == 'pass') {
          this.sweetAlert2Service.showNotification('User registered successfuly');
          this.route.navigate(['login']);
        } else {
          this.sweetAlert2Service.showErrorNotification('Failed, try again');
        }
      });
    }
  }
}