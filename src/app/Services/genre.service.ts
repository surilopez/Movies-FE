import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreCreationDTO, GenreDTO } from '../Models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private apiUrl = environment.apiUrl + 'genres'


  public GetAllGenres(): Observable<GenreDTO[]> {
    return this.httpClient.get<GenreDTO[]>(this.apiUrl)
  }

  public AddNewGenre(genre: GenreCreationDTO) {
    return this.httpClient.post(this.apiUrl, genre)
  }

}
