import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post:Post = new Post();
  postId;
  //list of acceptable topics
  topicList = [
    'Science',
    'Sports',
    'Politics',
    'Nature',
    'Shopping',
    'Recipes',
    'Travel',
  ];

  constructor(private service:PostServiceClient,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.activatedRoute.params.subscribe(params => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.postId = params['id'];
    this.service.findPostById(this.postId)
      .then(post =>
        this.post = post[0]
      );
  }

  deleteDraft() {
    if(confirm('Continuing will delete your draft and your post will not be updated. Continue?')) {
      this.router.navigateByUrl('/home');
    }
  }

  updatePost() {
    if(confirm('Are you sure you want to update your post?')) {
      this.service.updatePost(this.post)
        .then( () => {
          this.router.navigateByUrl('/viewPost/' + this.postId);
        });
    }
  }
}
