import { Component, OnInit } from '@angular/core';
import {CommentServiceClient} from "../services/comment.service.client";
import {ActivatedRoute} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments = [];
  postId = '';
  edit = false;
  user:User = new User();

  constructor(private service:CommentServiceClient,
              private activatedRoute:ActivatedRoute,
              private userService:UserServiceClient) {
    this.activatedRoute.params.subscribe((params) => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.postId = params['id'];
    this.findCommentsByPostId();
    this.getUserFromSession();
  }

  deleteComment(comment) {
    this.service.deleteComment(comment)
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        }
        this.findCommentsByPostId();
        window.location.reload();
      });
  }

  editComment(comment) {
    this.edit = true;
  }

  updateComment(comment) {
    this.service.editComment(comment)
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        }
        this.findCommentsByPostId();
        window.location.reload();
      })

  }

  findCommentsByPostId() {
    this.service.findCommentsByPost(this.postId)
      .then((comments) => this.comments = comments);

  }

  getUserFromSession() {
    this.userService.getCurrentUserSession()
      .then( user => {
        this.user = user;
      });
  }

  //if user created the comment, the user can edit it
  viewEdit(comment) {
    if (comment.username === this.user.username) {
      return false;
    } else {
      return true;
    }
  }

  //if user created the comment or is an admin,
  //the user can delete the comment
  viewDelete(comment) {
    if (comment.username == this.user.username || this.user.role === 'admin') {
      return false;
    } else {
      return true;
    }
  }
}
