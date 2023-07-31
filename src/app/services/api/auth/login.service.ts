import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiService{

  private apiUrl : string = `${this.HOST_API}${this.API_AUTH}`;
  private apiUrlLogout : string = `${this.HOST_API}${this.API_BACK}auth/`;


  login(user : User) {
    return this.httpClient.post(`${this.apiUrl}`, user)
  }

  logout() {
    return this.httpClient.post(this.apiUrlLogout, null, { headers: this.getHeaders() })
  }

}
