import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiService{

  private apiUrl : string = `${this.HOST_API}${this.API_AUTH}`;

  login(user : User) {
    return this.httpClient.post(`${this.apiUrl}`, user)
  }

  logout() {

  }

}
