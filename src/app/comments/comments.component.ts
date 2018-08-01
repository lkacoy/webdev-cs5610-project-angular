import { Component, OnInit } from '@angular/core';
import {Comment} from '../models/comment.model';
import {CommentServiceClient} from "../services/comment.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment = new Comment();

  constructor(private service:CommentServiceClient,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => this.setPostId(params));
  }

  ngOnInit() {
  }

  setPostId(params) {
    this.comment.postId = params['id'];
  }

  clearComment() {
    this.comment.comment = '';
  }

  addComment() {
    this.service.createComment(this.comment)
      .then(() => this.clearComment());
  }

}
