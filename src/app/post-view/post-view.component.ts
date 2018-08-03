import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../models/post.model";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId;
  post = new Post();
  isPostWriter = false;

  constructor(private service:PostServiceClient,
              private activatedRoute:ActivatedRoute,
              private userService:UserServiceClient) {
    this.activatedRoute.params.subscribe((params) => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
   this.postId = params['id'];
   this.service.findPostById(this.postId)
     .then(post => {
       this.post = post[0];
       this.verifyRole();
     });

  }

  editPost() {

  }

  deletePost() {
    if (confirm('Are you sure you wish to delete this post?')) {

    }
  }

  // post can only be edited and deleted by the writer
  verifyRole() {
    this.userService.getCurrentUserSession()
      .then(response => {
        console.log(response);
        console.log(this.post.username);

        if (response.username === this.post.username) {

          this.isPostWriter = true;
        }
        else {
          this.isPostWriter = false;
        }
      })
  }

}
