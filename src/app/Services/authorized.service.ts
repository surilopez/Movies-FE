import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResponse, CredentialsUser, UserDTO } from '../Models/security';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService {

  private apiUrl = environment.apiUrl + 'Acounts'

  private readonly tokenKey = 'token';
  private readonly expirationKey = 'token-expiration';
  private readonly fieldRole = 'role';



  constructor(private httpClient: HttpClient) { }

  GetUserList(page: number, recordsToShow: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('Page', page.toString())
    params = params.append('RecordsByPage', recordsToShow.toString())
    return this.httpClient.get<UserDTO[]>(`${this.apiUrl}/UserList`, { observe: 'response', params })
  }

  AddRoleAdmin(userId: string) {
    const headers = new HttpHeaders('Content-Type: application/json')
    return this.httpClient.post(`${this.apiUrl}/AddRoleAdmin`, JSON.stringify(userId), { headers })
  }

  RemoveRoleAdmin(userId: string) {
    const headers = new HttpHeaders('Content-Type: application/json')
    return this.httpClient.post(`${this.apiUrl}/RemoveRoleAdmin`, JSON.stringify(userId), { headers })
  }


  logged(): boolean {
    const token = localStorage.getItem(this.tokenKey)

    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationKey)
    if (expiration != null) {
      const expirationDate = new Date(expiration)
      if (expirationDate <= new Date()) {
        this.Logout();
        return false;
      }
      return true;
    }
    return false;
  }

  Logout() {
    localStorage.removeItem(this.tokenKey)
    localStorage.removeItem(this.expirationKey)
  }

  getRol(): string {
    return this.GetJWTField(this.fieldRole)
  }

  Register(credential: CredentialsUser): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.apiUrl + '/Add', credential)
  }

  Login(credential: CredentialsUser): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.apiUrl + '/Login', credential)
  }


  GetJWTField(field: string): string {
    const token = localStorage.getItem(this.tokenKey)
    if (!token) {
      return ''
    }

    var dataToken = JSON.parse(atob(token.split('.')[1]))
    return dataToken[field]
  }
  StorageToken(authenticationResponse: AuthenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token)
    localStorage.setItem(this.expirationKey, authenticationResponse.expiration.toString())
  }

  GetToken() {
    return localStorage.getItem(this.tokenKey)
  }
}
