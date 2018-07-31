import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  password2;
  email;
  firstName;
  lastName;
  role;
  passwordNotMatch = false;

  roleOptions = [
    {value:'blogFollower', name: 'Blog Follower'},
    {value: 'blogWriter', name: 'Blog Writer'}
  ];

  constructor() { }

  ngOnInit() {
  }

  verifyPasswordMatch() {
    if (this.password && this.password !== this.password2) {
      this.passwordNotMatch = true;
    } else {
      this.passwordNotMatch = false;
    }
    console.log(this.passwordNotMatch);
  }

}
