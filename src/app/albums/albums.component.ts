import { ApiAlbums } from './../models/apialbums.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiAlbumsService } from './api-albums.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: ApiAlbums[] = [];
  novoAlbum: ApiAlbums | null = null;
  erro: any;
  constructor(public ApiAlbumsService: ApiAlbumsService,)/* modifiquei o private por public para poder usar no html */ {
    this.getter();
  }

  ngOnInit(): void {

  }

  getter(){
    this.ApiAlbumsService.getAlbums().subscribe(
      data => {
        this.albums = data;
        console.log(data)
        console.log(this.albums)
      }, error => {
        this.erro = error;
        console.error("Erro: ", error );
      });
  }

  types = new FormControl();

  typesList: string[] = ['Filmes', 'Séries', 'Desenhos Animados', 'Livros', 'Games'];

  albumform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    title: new FormControl('', Validators.required),
    gender: new FormControl(1),
    types: new FormControl(0),
    date: new FormControl(''),

  })

  onClear(){}

  salvarAlbum(){
    if(this.albumform.valid){
      this.novoAlbum = this.albumform.value;
      console.log(this.novoAlbum)
      this.ApiAlbumsService.addAlbum(this.novoAlbum).subscribe(
        data => {
          console.log(data)
        },
        error => {},
      )
    }
  }

}
