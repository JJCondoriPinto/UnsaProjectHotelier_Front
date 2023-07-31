import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageInfoService } from '../local/storage-info.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService { // Servicio global para apis

   HOST_API: string = 'http://127.0.0.1:8000'
   API_AUTH: string = '/api-token-auth/'
   API_BACK: string = '/api/v1/'

  protected HEADER: HttpHeaders = new HttpHeaders();

  constructor(protected httpClient : HttpClient, private storage : StorageInfoService) { }

  getHeaders() : HttpHeaders {
    return this.HEADER.append('Authorization', `Token ${this.storage.getKeyToken()}`);
  }

}
