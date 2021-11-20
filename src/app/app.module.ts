import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PaginationTodosComponent } from './todos/pagination-todos/pagination-todos.component';
import { PaginationAlbumsComponent } from './albums/pagination-albums/pagination-albums.component';
import { PaginationPostsComponent } from './posts/pagination-posts/pagination-posts.component';
import { PostsComponent } from './posts/posts.component';

import { ApiAlbumsService } from './albums/api-albums.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    AlbumsComponent,
    PostsComponent,
    PaginationTodosComponent,
    PaginationAlbumsComponent,
    PaginationPostsComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient, ApiAlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
