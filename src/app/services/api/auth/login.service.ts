import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private hostApi: string = 'http://127.0.0.1:8000/'
  private apiUrl : string = `${this.hostApi}api-token-auth/`;

  constructor(private httpClient : HttpClient) { }

  login(user : User) {
    return this.httpClient.post(`${this.apiUrl}`, user)
  }

  logout() {

  }

}
