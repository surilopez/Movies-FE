import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TheaterCreationDTO } from '../Theaters/theater';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  private apiUrl = environment.apiUrl + 'Theaters'

  constructor( private httpClient: HttpClient) { }

  public AddNewTheater(theater: TheaterCreationDTO) {
    return this.httpClient.post(this.apiUrl, theater)
  }
}
