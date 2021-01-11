import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LandingPageDTO, MovieCreationDTO, MovieDTO, MoviesPostGet, MoviesPutGet } from '../Models/movies';
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

  public putGet(id: number): Observable<MoviesPutGet> {

    return this.httpClient.get<MoviesPutGet>(`${this.apiUrl}/putget?id=${id}`)
  }

  public filter(values: any): Observable<any> {

    const params = new HttpParams({ fromObject: values });
    return this.httpClient.get<MovieDTO[]>(`${this.apiUrl}/Filters`, { params, observe: 'response' });
  }

  public Add(movie: MovieCreationDTO): Observable<number> {
    const formData = this.BuildFormData(movie);
    return this.httpClient.post<number>(this.apiUrl, formData);
  }

  public Edit(id: number, movie: MovieCreationDTO) {

    const formData = this.BuildFormData(movie);
    return this.httpClient.put(`${this.apiUrl}/${id}`, formData);
  }

  public GetByID(id: number): Observable<MovieDTO> {

    return this.httpClient.get<MovieDTO>(`${this.apiUrl}/${id}`);
  }

  private BuildFormData(movie: MovieCreationDTO): FormData {
    const formData = new FormData();

    formData.append('Title', movie.title)
    console.log(movie.info)
    formData.append('Info', movie.info)
    formData.append('Trailer', movie.trailer)
    formData.append('onTheater', String(movie.onTheater))
    if (movie.releaseDate) {
      formData.append('ReleaseDate', formatDate(movie.releaseDate))
    }

    if (movie.Img) {
      formData.append('Img', movie.Img)
    }

    formData.append('GenresIDList', JSON.stringify(movie.GenresId))
    formData.append('TheatersIDList', JSON.stringify(movie.TheatersId))
    formData.append('ActorsList', JSON.stringify(movie.Actors))

    return formData;
  }
}
