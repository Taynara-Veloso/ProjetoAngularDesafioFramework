import { ApiTodos } from './../models/apitodos.model';
import { Component, OnInit } from '@angular/core';
import { ApiTodosService } from './api-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any;
  erro: any;
  constructor(private ApiTodosService: ApiTodosService) {
    this.getter()
  }

  ngOnInit(): void {
  }
  getter(){
    this.ApiTodosService.getTodos().subscribe(
      data=> {
        this.todos = data;
        console.log(data)
        console.log(this.todos)
      }, error => {
        this.erro = error;
        console.error("Erro: ", error );
      });
    }
}
