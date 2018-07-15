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
  constructor(private router:ActivatedRoute,
              private blogService:BloggerApiServiceClient) { }

  ngOnInit() {
    console.log(this.router.snapshot.params['id']);
    console.log(this.router.snapshot.data);
    this.router.params.subscribe(params => this.getBlogInfo(params['id']));
  }

  getBlogInfo(id) {
    this.blogService.findBlogInfo(id)
      .then(info => this.info = info.response.blog);
  }

  goBack() {
    parent.history.go(-1);
  }
}
