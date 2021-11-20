import { ApiTodos } from './../models/apitodos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTodosService {

  constructor(private http: HttpClient) { }
  public getTodos():Observable<ApiTodos[]>{
    return this.http.get<ApiTodos[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
