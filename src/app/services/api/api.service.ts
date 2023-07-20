import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageInfoService } from '../local/storage-info.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService { // Servicio global para apis

  protected HOST_API: string = 'http://127.0.0.1:8000/'
  protected API_AUTH: string = 'api-token-auth/'
  protected API_BACK: string = 'api/v1/'

  protected HEADER: HttpHeaders = new HttpHeaders();

  constructor(protected httpClient : HttpClient, private storage : StorageInfoService) {
    this.HEADER = this.HEADER.append('Content-Type','application/json')
    this.HEADER = this.HEADER.append('Authorization', `Token ${this.storage.getKeyToken()}`);
  }

}
