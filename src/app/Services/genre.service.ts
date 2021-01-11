import { HttpClient, HttpParams } from '@angular/common/http';
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


  public GetAllGenres(page: number, recordsToShow: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('Page', page.toString())
    params = params.append('RecordsByPage', recordsToShow.toString())
    return this.httpClient.get<GenreDTO[] | null>(this.apiUrl, { observe: 'response', params })
  }

  public GetAll(): Observable<any> {

    return this.httpClient.get<GenreDTO[] | null>(`${this.apiUrl}/allGenres`)
  }

  public getGenreById(id: number): Observable<GenreDTO> {

    return this.httpClient.get<GenreDTO>(`${this.apiUrl}/${id}`)
  }

  public AddNewGenre(genre: GenreCreationDTO) {
    return this.httpClient.post(this.apiUrl, genre)
  }

  public editGenre(id: number, genre: GenreCreationDTO) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, genre)
  }

  public deleteGenreByID(id:number){
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }

}
