import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../models/post.model";
import {PostServiceClient} from "../services/post.service.client";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  username;
  posts: Post[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private service:PostServiceClient) {
    this.activatedRoute.params.subscribe((params) => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.username = params['id'];
    this.service.findPostsForUser(this.username)
      .then((posts) => this.posts = posts);
  }

}
