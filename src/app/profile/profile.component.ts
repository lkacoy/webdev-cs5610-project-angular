import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../../../../webdev-summer2018-angular/src/app/models/user.model.client";

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
  isAdmin:boolean = false;

  constructor(private service: UserServiceClient) { }

  ngOnInit() {

    this.service
      .profile()
      .then(user => {
        this.username = user.username;
        this.email  = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        if (user.role === 'admin') this.isAdmin = true;
      });
  }

}
