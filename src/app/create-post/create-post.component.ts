import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";
import {Post} from "../models/post.model";
import {Router} from "@angular/router";

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
    'Politics',
    'Nature',
    'Shopping',
    'Recipes',
    'Travel',
    'Other'
  ];
  constructor(private service:PostServiceClient,
              private router:Router) { }

  ngOnInit() {
  }

  deleteDraft() {
    if(confirm('Continuing will delete your draft and you will be unable to return to make edits. Continue?')) {
      if (this.post._id) {
        this.service.deletePost(this.post)
      }
      this.router.navigateByUrl('/home');
    }
  }

  saveDraft() {
    this.post.published = false;

    //if an id exists, the post already exists in the database
    //this means an update should be done rather than post
    if (this.post._id) {
      //update
    } else {
      this.service.createPost(this.post)
        .then((response) => {
          console.log(response);
          alert('Your draft has been saved!')
        });
    }

  }

  publishPost() {
    if(confirm('Continuing will make your content viewable to others. Continue?')) {
      this.post.published = true;
      this.service.createPost(this.post)
        .then((response) => {
          console.log(response);
          alert('Your post has been published!');
          this.router.navigateByUrl('/viewPost/'+response._id);
        })
    }
  }

}
