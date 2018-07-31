import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

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
  usernameTakenError = false;

  roleOptions = [
    {value:'blogFollower', name: 'Blog Follower'},
    {value: 'blogWriter', name: 'Blog Writer'}
  ];

  constructor(private service:UserServiceClient,
              private router:Router) { }

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

  register(username, password) {
    var user = {username: this.username, password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email,
    role: this.role};
    this.service
      .createUser(user)
      .then((response) => {
        if (response && response.error) {
          this.usernameTakenError = true;
        } else {
          this.usernameTakenError = false;
          this.router.navigate(['profile']);
        }
      });

  }

}
