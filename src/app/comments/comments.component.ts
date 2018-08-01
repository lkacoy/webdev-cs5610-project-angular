import { Component, OnInit } from '@angular/core';
import {Comment} from '../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment = new Comment();

  constructor() { }

  ngOnInit() {
  }

  clearComment() {
    this.comment.comment = '';
  }

  addComment() {

  }

}
