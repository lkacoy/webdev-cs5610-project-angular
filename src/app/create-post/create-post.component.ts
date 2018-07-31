import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteDraft() {
    if(confirm('Continuing will delete your draft and you will be unable to return to make edits. Continue?')) {

    }
  }

  saveDraft() {

  }

  publishPost() {
    if(confirm('Continuing will make your content viewable to others. Continue?')) {
      
    }
  }

}
