import { Injectable } from '@angular/core';
import { StorageInfoService } from '../../local/storage-info.service';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}auth/`;

  isAuthenticate() : Observable<any> {
    return this.httpClient.get(this.apiUrl, { headers: this.getHeaders() })
  }

}
