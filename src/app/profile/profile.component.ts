import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../../../../webdev-summer2018-angular/src/app/models/user.model.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = new User();
  username;
  password;
  email;
  firstName;
  lastName;
  role;
  isAdmin:boolean = false;

  constructor(private service: UserServiceClient,
              private router:Router) { }

  ngOnInit() {

    this.service
      .profile()
      .then(user => {
        this.username = user.username;
        this.email  = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.role = user.role;
        if (user.role === 'admin') this.isAdmin = true;
      });
  }

/*

  update() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.service.updateUser(this.user)
      .then(user => {
        this.user = user;
        this.router.navigateByUrl('/profile');
      });
  }
*/

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

}
