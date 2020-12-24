import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorCreationDTO } from '../Actors/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private apiUrl = environment.apiUrl + 'actors'
  constructor(
    private httpClient: HttpClient
  ) { }

  public AddNewActor(actor: ActorCreationDTO) {
    return this.httpClient.post(this.apiUrl, actor)
  }

}
