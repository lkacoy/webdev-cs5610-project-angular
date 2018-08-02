import { Component, OnInit } from '@angular/core';
import {CommentServiceClient} from "../services/comment.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments = [];
  postId = '';

  constructor(private service:CommentServiceClient,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.postId = params['id'];
    this.findCommentsByPostId();
  }

  deleteComment(comment) {
    this.service.deleteComment(comment)
      .then((response) => {
        console.log(response);
        if (response.error) {
          console.log(response.error);
        }
        this.findCommentsByPostId();
        window.location.reload();
      });
  }

  findCommentsByPostId() {
    this.service.findCommentsByPost(this.postId)
      .then((comments) => this.comments = comments);

  }

}
