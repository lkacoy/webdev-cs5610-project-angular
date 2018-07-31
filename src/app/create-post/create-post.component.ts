import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post = new Post();

  //list of acceptable topics
  topicList = [
    'Science',
    'Sports',
    'Poliics',
    'Nature',
    'Shopping',
    'Recipes',
    'Travel',
  ];
  constructor(private service:PostServiceClient) { }

  ngOnInit() {
  }

  deleteDraft() {
    if(confirm('Continuing will delete your draft and you will be unable to return to make edits. Continue?')) {

    }
  }

  saveDraft() {
    this.post.published = false;
  }

  publishPost() {
    if(confirm('Continuing will make your content viewable to others. Continue?')) {
      this.post.published = true;
    }
  }

}
