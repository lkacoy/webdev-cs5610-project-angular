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
import {UserServiceClient} from "./services/user.service.client";
import { ProjectHomeComponent } from './project-home/project-home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {PostServiceClient} from "./services/post.service.client";
import { PostViewComponent } from './post-view/post-view.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BlogSearchComponent,
    BlogListComponent,
    BlogInfoComponent,
    HomeComponent,
    ProjectHomeComponent,
    CreatePostComponent,
    PostViewComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    BloggerApiServiceClient,
    UserServiceClient,
    PostServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
