import { ApiPosts } from './../models/apiposts.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPostsService {

  constructor(private http: HttpClient) { }
  public getPosts():Observable<ApiPosts[]>{
    return this.http.get<ApiPosts[]>('https://jsonplaceholder.typicode.com/posts')
  }
  /*public insertPosts():Observable<ApiPosts[]>{
    return this.getPosts.push()
  }*/
}
