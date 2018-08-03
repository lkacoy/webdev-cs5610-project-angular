import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {PostServiceClient} from "../services/post.service.client";

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  blogWriters = [];
  posts = [];

  constructor(private userService: UserServiceClient,
              private postService: PostServiceClient) {
    this.userService.findBlogWriters()
      .then(blogWriters => this.blogWriters = blogWriters);
    this.postService.findAllPosts()
      .then(posts => {
        if (posts.length > 0) {
          posts.forEach( (post) => {
            if (post.published == true) {
              this.posts.push(post);
            }
          })
        }
      });
  }

  ngOnInit() {
  }

}
