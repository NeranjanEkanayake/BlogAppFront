import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { ViewBlogsComponent } from './components/view-blogs/view-blogs.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'blogs', component: ViewBlogsComponent },
  { path: 'blogs/:id', component: BlogDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
