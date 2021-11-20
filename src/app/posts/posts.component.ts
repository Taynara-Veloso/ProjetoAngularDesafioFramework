import { ApiPostsService } from './api-posts.service';
import { Component, OnInit } from '@angular/core';
import { ApiPosts } from '../models/apiposts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  erro: any;
  constructor(private ApiPostsService: ApiPostsService) {
    this.getter();
  }

  ngOnInit(): void {
  }
  getter(){
    this.ApiPostsService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(data)
        console.log(this.posts)
      }, error => {
        this.erro = error;
        console.error("Erro: ", error );
      });
    }
}
