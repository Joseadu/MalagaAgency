import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/material-module';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  RedirectLogin() {
    this.route.navigate(['login']);
  }

  reactiveForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    username: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.compose([Validators.required, Validators.email])),
  });

  SaveUser() {
    console.log(this.reactiveForm.value);
  }
}
