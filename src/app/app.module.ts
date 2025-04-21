import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { ViewBlogsComponent } from './components/view-blogs/view-blogs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateBlogComponent,
    ViewBlogsComponent,
    NavbarComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
