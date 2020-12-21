import { Injectable } from '@angular/core';
import { GenreDTO } from '../Models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor() { }


  public GetAllGenres(): GenreDTO[] {
    return [{ id: 1, Name: "Comedy" }]
  }

}
