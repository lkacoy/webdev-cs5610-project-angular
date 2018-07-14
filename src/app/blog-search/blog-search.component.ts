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
  limit;

  constructor(private blogService:BloggerApiServiceClient) { }

  ngOnInit() {
  }

  searchPostsByTag(keyword, limit) {
      this.blogService.findPostsBySearchCriteria(keyword, limit)
        .then(response => this.blogs = response.response);
  }

}
