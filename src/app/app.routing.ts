import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {BlogSearchComponent} from "./blog-search/blog-search.component";
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogInfoComponent} from "./blog-info/blog-info.component";
const appRoutes: Routes = [
  {path: '', redirectTo: 'blog-list', pathMatch: 'full'},
  {path: 'blog-list', component: BlogListComponent},
  {path: 'blog-search', component: BlogSearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'blog-info', component: BlogInfoComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
