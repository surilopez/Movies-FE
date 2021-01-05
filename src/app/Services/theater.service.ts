import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';;
import { TheaterCreationDTO, TheaterDTO } from '../Theaters/theater';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  private apiUrl = environment.apiUrl + 'Theaters'

  constructor( private httpClient: HttpClient) { }

  public AddNewTheater(theater: TheaterCreationDTO) {
    return this.httpClient.post(this.apiUrl, theater)
  }

  public GetAllTheaters(page: number, recordsToShow: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('Page', page.toString())
    params = params.append('RecordsByPage', recordsToShow.toString())
    return this.httpClient.get<TheaterDTO[] | null>(this.apiUrl, { observe: 'response', params })
  }

  public deleteTheaterByID(id:number){
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }

}
