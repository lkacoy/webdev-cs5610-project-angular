import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId;
  post = new Post();

  constructor(private service:PostServiceClient,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
   this.postId = params['id'];
   this.service.findPostById(this.postId)
     .then(post => this.post = post[0]);
  }

  editPost() {

  }

  deletePost() {
    if (confirm('Are you sure you wish to delete this post?')) {
      
    }
  }

}
