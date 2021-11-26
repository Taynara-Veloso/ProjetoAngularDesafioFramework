import { ApiAlbumsService } from './../api-albums.service';
import { ApiAlbums } from './../../models/apialbums.model';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pagination-albums',
  templateUrl: './pagination-albums.component.html',
  styleUrls: ['./pagination-albums.component.css'],
  providers: [ApiAlbumsService],
})
export class PaginationAlbumsComponent implements OnInit {
  @Output() album: EventEmitter<ApiAlbums> = new EventEmitter<ApiAlbums>();

  ELEMENT_DATA: ApiAlbums[] = [];
  albums: ApiAlbums[] = [];

  displayedColumns: string[] = ['id', 'title', 'editar'];
  dataSource = new MatTableDataSource<ApiAlbums>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(public dialog: MatDialog, public service: ApiAlbumsService){

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.getAlbumsApi();
  };

  public getAlbumsApi(){
    let resp=this.service.getAlbums();
    resp.subscribe(report => this.dataSource.data=report as ApiAlbums[]);

  }
  EditarAlbum(album: ApiAlbums){
    this.album.emit(album);

  }
  deletarAlbum(id: number){
    var resposta = window.confirm("Deseja mesmo deletar este item?");
    if(resposta){
      this.service.apagarAlbum(id).subscribe(
        data =>{
          console.log("deletado com sucesso")
        }, error => {
          console.log("houve um erro")
        }
      )
    }
  }


}
