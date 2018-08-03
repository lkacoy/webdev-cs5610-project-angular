import { Component, OnInit } from '@angular/core';
import {Comment} from '../models/comment.model';
import {CommentServiceClient} from "../services/comment.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment = new Comment();
  isLoggedIn = false;

  constructor(private service:CommentServiceClient,
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private userService:UserServiceClient) {
    this.activatedRoute.params.subscribe((params) => this.setPostId(params));
  }

  ngOnInit() {
  }

  setPostId(params) {
    this.comment.postId = params['id'];
    this.userService.getCurrentUserSession()
      .then(user => {
        if (user.username) {
          this.isLoggedIn = true;
        }
      })
  }

  clearComment() {
    this.comment.comment = '';
  }

  addComment() {
    this.service.createComment(this.comment)
      .then(() => {
        this.clearComment();
        window.location.reload();
      });
  }

}
