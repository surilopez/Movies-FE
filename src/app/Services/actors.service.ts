import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorCreationDTO, ActorDTO } from '../Actors/actor';
import { formatDate } from '../Utils/helpers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private apiUrl = environment.apiUrl + 'actors'
  constructor(
    private httpClient: HttpClient
  ) { }

  public GetAllActors(page: number, recordsToShow: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('Page', page.toString())
    params = params.append('RecordsByPage', recordsToShow.toString())
    return this.httpClient.get<ActorDTO[] | null>(this.apiUrl, { observe: 'response', params })
  }

  public getActorById(id: number): Observable<ActorDTO> {

    return this.httpClient.get<ActorDTO>(`${this.apiUrl}/${id}`)
  }

  public AddNewActor(actor: ActorCreationDTO) {
    let formData = this.BuildFormData(actor);
   return this.httpClient.post(this.apiUrl,formData)
  }

  public EditActor(id: number, actor: ActorCreationDTO) {
    const formData = this.BuildFormData(actor);
    return this.httpClient.put(`${this.apiUrl}/${id}`, formData)
  }



  public deleteActorByID(id:number){
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }

  private BuildFormData(actor: ActorCreationDTO): FormData {
    const formData:FormData = new FormData();
    formData.append('Name', actor.name)
    if (actor.biography) {
      formData.append('Biography', actor.biography)
    }
    if (actor.dateOfBirth) {
      formData.append('DateOfBirth', formatDate(actor.dateOfBirth))
    }

    if (actor.photo) {
      formData.append('Photo', actor.photo)
    }

    return formData;
  }

}
