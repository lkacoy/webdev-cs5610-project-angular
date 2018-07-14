import { Component, OnInit } from '@angular/core';
import {BloggerApiServiceClient} from "../services/bloggerApi.service.client";

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.css']
})
export class BlogSearchComponent implements OnInit {

  keyword;
  blogs = [];

  constructor(private blogService:BloggerApiServiceClient) { }

  ngOnInit() {
  }

  searchPostsByTag(keyword) {
      this.blogService.findPostsBySearchCriteria(keyword)
        .then(blogs => this.blogs = blogs.response);
      console.log(this.blogs);
  }

}
