import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResponse, CredentialsUser } from '../Models/security';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService {

  private apiUrl = environment.apiUrl + 'Acounts'

  constructor(private httpClient: HttpClient) { }


  logged(): boolean {
    return false;
  }

  getRol(): string {
    return 'admin'
  }

  Register(credential: CredentialsUser): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.apiUrl + '/Add', credential)
  }

}
