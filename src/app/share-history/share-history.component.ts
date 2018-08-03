import { Component, OnInit } from '@angular/core';
import {ShareServiceClient} from "../services/share.service.client";
import {ActivatedRoute} from "@angular/router";
import {Share} from "../models/share.model";

@Component({
  selector: 'app-share-history',
  templateUrl: './share-history.component.html',
  styleUrls: ['./share-history.component.css']
})
export class ShareHistoryComponent implements OnInit {

  username:string;
  shares:Share[] = [];

  constructor(private service:ShareServiceClient,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.username = params['id'];
    this.service.findSharesForUser(this.username)
      .then(shares => this.shares = shares);
  }

}
