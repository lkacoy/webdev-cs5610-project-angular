import { Component, OnInit } from '@angular/core';
import {Comment} from '../models/comment.model';
import {CommentServiceClient} from "../services/comment.service.client";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment = new Comment();

  constructor(private service:CommentServiceClient) { }

  ngOnInit() {
  }

  clearComment() {
    this.comment.comment = '';
  }

  addComment() {
    this.service.createComment(this.comment)
      .then(() => this.clearComment());
  }

}
