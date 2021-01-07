import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesPostGet } from '../Models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiUrl + 'Movies'

  constructor(private httpClient: HttpClient) { }

  public postGet(): Observable<MoviesPostGet> {
    return this.httpClient.get<MoviesPostGet>(`${this.apiUrl}/postget`)
  }
}
