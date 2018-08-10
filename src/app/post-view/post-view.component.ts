import { Component, OnInit } from '@angular/core';
import {PostServiceClient} from "../services/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../models/post.model";
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model";
import {ShareServiceClient} from "../services/share.service.client";
import {Share} from "../models/share.model";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId;
  post = new Post();
  isPostWriter = false;
  isAdmin = false;
  isLoggedIn = false;
  user:User = new User();
  share:Share = new Share();
  shares:Share[] =  [];

  constructor(private service:PostServiceClient,
              private activatedRoute:ActivatedRoute,
              private userService:UserServiceClient,
              private shareService:ShareServiceClient,
              private router:Router) {
    this.activatedRoute.params.subscribe((params) => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
   this.postId = params['id'];
   this.service.findPostById(this.postId)
     .then(post => {
       this.post = post[0];
       this.verifyRole();
     });
   this.retrieveSharesForPost();
  }

  editPost() {
    this.router.navigateByUrl('/editPost/' + this.postId);
  }

  deletePost() {
    if (confirm('Are you sure you wish to delete this post?')) {
      this.service.deletePost(this.post)
        .then( response => {
          this.router.navigateByUrl('/home');
        })
    }
  }

  isWriterOrAdmin() {
    if (this.isAdmin || this.isPostWriter) {
      return true;
    }

    return false;
  }

  // post can only be edited and deleted by the writer
  verifyRole() {
    this.userService.getCurrentUserSession()
      .then(response => {

        if (response.username) {
          this.isLoggedIn = true;
          this.user = response;
        } else {
          this.isLoggedIn = false;
        }

        if (response.username === this.post.username) {

          this.isPostWriter = true;
        }
        else {
          this.isPostWriter = false;
        }

        if (response.role === "admin") {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      })
  }

  sharePost() {
    this.share.username = this.user.username;
    this.share.postId = this.postId;
    this.share.postName = this.post.postTitle;
    this.share.author = this.post.username;

    this.shareService.createShare(this.share)
      .then( share => {
        alert("You\'ve shared this post!");
        window.location.reload();
      });
  }

  retrieveSharesForPost() {
    this.shareService.findSharesForPost(this.postId)
      .then(shares => this.shares = shares);

  }
}
