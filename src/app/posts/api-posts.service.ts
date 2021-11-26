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
  public addPost(post: ApiPosts | null):Observable<ApiPosts>{
    return this.http.post<ApiPosts>('https://jsonplaceholder.typicode.com/posts', post)

  }
  public atualizaPost(id: number, post: ApiPosts | null):Observable<ApiPosts>{
    return this.http.put<ApiPosts>(`https://jsonplaceholder.typicode.com/posts/${id}`, post)

  }
  public apagarPost(id: number):Observable<ApiPosts>{
    return this.http.delete<ApiPosts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}


