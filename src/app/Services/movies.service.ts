import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LandingPageDTO, MovieCreationDTO, MovieDTO, MoviesPostGet } from '../Models/movies';
import { formatDate } from '../Utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiUrl + 'Movies'

  constructor(private httpClient: HttpClient) { }

  public GetLandingPage(): Observable<LandingPageDTO> {
    return this.httpClient.get<LandingPageDTO>(this.apiUrl)
  }

  public postGet(): Observable<MoviesPostGet> {
    return this.httpClient.get<MoviesPostGet>(`${this.apiUrl}/postget`)
  }

  public Add(movie: MovieCreationDTO) {
    console.log(movie)
    const formData = this.BuildFormDate(movie);
    console.log(formData)
    return this.httpClient.post(this.apiUrl, formData);
  }

  public GetByID(id: number): Observable<MovieDTO> {

    return this.httpClient.get<MovieDTO>(`${this.apiUrl}/${id}`);
  }

  private BuildFormDate(movie: MovieCreationDTO): FormData {
    const formData = new FormData();

    formData.append('Title', movie.Title)
    formData.append('Info', movie.Info)
    formData.append('Trailer', movie.Trailer)
    formData.append('onTheater', String(movie.onTheater))
    if (movie.ReleaseDate) {
      formData.append('ReleaseDate', formatDate(movie.ReleaseDate))
    }

    if (movie.Img) {
      formData.append('Img', movie.Img)
    }
    console.log(JSON.stringify(movie.GenresId))
    formData.append('GenresIDList', JSON.stringify(movie.GenresId))
    formData.append('TheatersIDList', JSON.stringify(movie.TheatersId))
    formData.append('ActorsList', JSON.stringify(movie.Actors))

    return formData;
  }
}
