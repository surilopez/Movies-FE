import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaitingService {

  private apiUrl = environment.apiUrl + 'Rating'

  constructor(private httpClient: HttpClient) { }

  Rate(movieID: number, score: number) {

    return this.httpClient.post(this.apiUrl, { movieID, score })
  }
}
