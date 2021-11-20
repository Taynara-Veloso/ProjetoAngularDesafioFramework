import { ApiTodos } from './../../models/apitodos.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiTodosService } from '../api-todos.service';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pagination-todos',
  templateUrl: './pagination-todos.component.html',
  styleUrls: ['./pagination-todos.component.css']
})
export class PaginationTodosComponent implements OnInit {
  ELEMENT_DATA: ApiTodos[] = [];

  displayedColumns: string[] = ['id', 'title', 'completed'];
  dataSource = new MatTableDataSource<ApiTodos>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private service: ApiTodosService){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.getTodosApi();
  };
  public getTodosApi(){
    let resp=this.service.getTodos();
    resp.subscribe(report => this.dataSource.data=report as ApiTodos[]);

  }

}
