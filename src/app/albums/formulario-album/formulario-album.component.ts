import { ApiAlbums } from './../../models/apialbums.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiAlbumsService } from '../api-albums.service';

@Component({
  selector: 'app-formulario-album',
  templateUrl: './formulario-album.component.html',
  styleUrls: ['./formulario-album.component.css']
})
export class FormularioAlbumComponent implements OnInit, OnChanges {
  @Input() album: ApiAlbums = {"title": "teste", "id": 1, "userId": 2,};
  albumform: FormGroup;
  albums: ApiAlbums[] = [];
  public novoAlbum: ApiAlbums;
  erro: any;
  constructor(public ApiAlbumsService: ApiAlbumsService,) {
    this.getter();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['album']){
      console.log(this.album)
      if(this.album)
      this.albumform.patchValue({
        title: this.album.title,
        userId: this.album.userId,
        id: this.album.id
        })

    }
  }

  ngOnInit(): void {

    this.albumform = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      email: new FormControl('',Validators.email),
      title: new FormControl('', Validators.required),
      gender: new FormControl(1),
      types: new FormControl(0, Validators.required),
      date: new FormControl(''),

    })

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

  salvarAlbum(){
    if(this.albumform.valid){
      this.novoAlbum = this.albumform.value;
      debugger
      console.log(this.novoAlbum)
      if(this.novoAlbum?.id == 0){
        this.ApiAlbumsService.addAlbum(this.novoAlbum).subscribe(
          data => {
            console.log(data)
          },
          error => {},
        )
      }else{
        this.ApiAlbumsService.atualizaAlbum(this.novoAlbum?.id ,this.novoAlbum).subscribe(
          data => {
            console.log(data)
          },
          error => {},
        )
      }
    }
  }

}
