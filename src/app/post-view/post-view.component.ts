import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(private service:PostServiceClient) { }

  ngOnInit() {
  }

}
