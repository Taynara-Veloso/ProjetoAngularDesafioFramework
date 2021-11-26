import { ApiAlbums } from './../models/apialbums.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumEditar: ApiAlbums;

  constructor()/* modifiquei o private por public para poder usar no html*/ {

  }

  ngOnInit(): void {

  }
  album(album: ApiAlbums){
    this.albumEditar = album;
  }

}
