import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorCreationDTO } from '../Actors/actor';
import { formatDate } from '../Utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private apiUrl = environment.apiUrl + 'actors'
  constructor(
    private httpClient: HttpClient
  ) { }

  public AddNewActor(actor: ActorCreationDTO) {
    const formData = this.BuildFormData(actor);
    return this.httpClient.post(this.apiUrl, formData)
  }

  private BuildFormData(actor: ActorCreationDTO): FormData {
    const formData = new FormData();
    formData.append('Name', actor.Name)
    if (actor.Biography) {
      formData.append('Biography', actor.Biography)
    }
    if (actor.DateOfBirth) {
      formData.append('DateOfBirth', formatDate(actor.DateOfBirth))
    }

    if (actor.ActorImage) {
      formData.append('Photo', actor.ActorImage)
    }

    return formData;
  }

}
