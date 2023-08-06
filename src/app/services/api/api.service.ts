import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageInfoService } from '../local/storage-info.service';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService { // Servicio global para apis

   HOST_API: string = environment.API_HOST;
   API_AUTH: string = environment.API_TOKEN;
   API_BACK: string = environment.API_PREFIX;

  protected HEADER: HttpHeaders = new HttpHeaders();

  constructor(protected httpClient : HttpClient, private storage : StorageInfoService) { }

  getHeaders() : HttpHeaders {
    return this.HEADER.append('Authorization', `Token ${this.storage.getKeyToken()}`);
  }

}
