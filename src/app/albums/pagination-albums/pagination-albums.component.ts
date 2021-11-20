import { ApiAlbums } from './../../models/apialbums.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiAlbumsService } from '../api-albums.service';

@Component({
  selector: 'app-pagination-albums',
  templateUrl: './pagination-albums.component.html',
  styleUrls: ['./pagination-albums.component.css']
})
export class PaginationAlbumsComponent implements OnInit {
  ELEMENT_DATA: ApiAlbums[] = [];

  displayedColumns: string[] = ['id', 'title'];
  dataSource = new MatTableDataSource<ApiAlbums>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private service: ApiAlbumsService){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.getAlbumsApi();
  };
  public getAlbumsApi(){
    let resp=this.service.getAlbums();
    resp.subscribe(report => this.dataSource.data=report as ApiAlbums[]);

  }

}
