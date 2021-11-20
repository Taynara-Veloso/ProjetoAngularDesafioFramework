import { Injectable } from '@angular/core';
import { ApiAlbums } from './../models/apialbums.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAlbumsService {

  constructor(private http: HttpClient ) { }
  public getAlbums():Observable<ApiAlbums[]>{
    return this.http.get<ApiAlbums[]>('https://jsonplaceholder.typicode.com/albums')

  }
  public addAlbum(album: ApiAlbums | null):Observable<ApiAlbums>{
    return this.http.post<ApiAlbums>('https://jsonplaceholder.typicode.com/albums', album)
  }
}
