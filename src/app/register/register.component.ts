import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  email;
  firstName;
  lastName;
  role;

  roleOptions = [
    {value:'blogFollower', name: 'Blog Follower'},
    {value: 'blogWriter', name: 'Blog Writer'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
