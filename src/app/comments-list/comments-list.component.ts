import { Component, OnInit } from '@angular/core';
import {CommentServiceClient} from "../services/comment.service.client";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments = [];

  constructor(private service:CommentServiceClient) { }

  ngOnInit() {
  }

}
