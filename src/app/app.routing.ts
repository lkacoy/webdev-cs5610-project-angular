import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {BlogSearchComponent} from "./blog-search/blog-search.component";
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogInfoComponent} from "./blog-info/blog-info.component";
import {HomeComponent} from "./home/home.component";
import {ProjectHomeComponent} from "./project-home/project-home.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {PostViewComponent} from "./post-view/post-view.component";
const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: ProjectHomeComponent},
  {path: 'blog-list', component: BlogListComponent},
  {path: 'blog-search', component: BlogSearchComponent},
  {path: 'createPost', component: CreatePostComponent},
  {path: 'viewPost/:id', component: PostViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'blog-info/:id', component: BlogInfoComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
