import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  safeUrl;

  constructor(private _sanitizer: DomSanitizer) {
    let url = 'https://www.youtube.com/embed/DV_3qx-oBms';
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

}
