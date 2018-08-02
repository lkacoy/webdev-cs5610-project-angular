import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  topic = '';
  title = '';
  username = '';
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
  posts = [];

  constructor(private service:PostServiceClient) { }

  ngOnInit() {
  }

  executeSearch() {
    this.service.findAllPosts()
      .then(posts => this.posts = posts);
  }

}
