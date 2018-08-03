import { Component, OnInit } from '@angular/core';
import {ShareServiceClient} from "../services/share.service.client";
import {ActivatedRoute} from "@angular/router";
import {Share} from "../models/share.model";
import {PostServiceClient} from "../services/post.service.client";

@Component({
  selector: 'app-share-history',
  templateUrl: './share-history.component.html',
  styleUrls: ['./share-history.component.css']
})
export class ShareHistoryComponent implements OnInit {

  username:string;
  shares:Share[] = [];

  constructor(private service:ShareServiceClient,
              private activatedRoute:ActivatedRoute,
              private postService:PostServiceClient) {
    this.activatedRoute.params.subscribe(params => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.username = params['id'];
    this.service.findSharesForUser(this.username)
      .then(shares => this.shares = shares);
  }

  findPostName(postId) {
    this.postService.findPostById(postId)
      .then(post => {
        console.log(post);
        if (post.postTitle) {
          return post.postTitle;
        }
      })
  }
}
