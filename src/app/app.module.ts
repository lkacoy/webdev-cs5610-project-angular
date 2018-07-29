import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import {BloggerApiServiceClient} from "./services/bloggerApi.service.client";
import {FormsModule} from "@angular/forms";
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BlogSearchComponent,
    BlogListComponent,
    BlogInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [BloggerApiServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
