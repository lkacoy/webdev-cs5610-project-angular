import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BloggerApiServiceClient} from "../services/bloggerApi.service.client";

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.css']
})
export class BlogInfoComponent implements OnInit {

  info;
  blogName;
  posts = [];

  constructor(private router:ActivatedRoute,
              private blogService:BloggerApiServiceClient) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.getBlogInfo(params['id']));
  }

  getBlogInfo(id) {
    this.blogName = id;
    this.blogService.findBlogInfo(id)
      .then(info => this.info = info.response.blog);
    this.blogService.findRecentBlogPosts(this.blogName)
      .then(posts => this.posts = posts.response.posts);
  }

  goBack() {
    parent.history.go(-1);
  }

}
