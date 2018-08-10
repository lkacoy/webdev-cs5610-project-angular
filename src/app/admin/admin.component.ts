import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../../../../webdev-summer2018-angular/src/app/models/user.model.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:User[] = [];

  constructor(private userService:UserServiceClient) {
    this.findAllUsers();
  }

  ngOnInit() {
  }

  findAllUsers() {
    this.userService.findAllUsers()
      .then(users => this.users = users);
  }

}
