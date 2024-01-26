import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/material-module';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router, private service:UserService) { }

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
    console.log(this.reactiveForm.value);
    if(this.reactiveForm.valid) {
      this.service.UserRegistration(this.reactiveForm.value). subscribe(item => {
        this.respData = item;

        if(this.respData.result == 'pass') {
          // sweetalert2
          alert('User registered successfuly')
          this.route.navigate(['login']);
        } else {
          // sweetalert2
          alert('Failed, try again');
        }
      });
    }
  }
}
