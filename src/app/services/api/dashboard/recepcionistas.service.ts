import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Recepcionista } from 'src/app/interfaces/Recepcionista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistasService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}recepcionistas/`;

  index() : Observable<Recepcionista[]> {
    return this.httpClient.get<Recepcionista[]>(this.apiUrl, { headers: this.getHeaders() })
  }

  show(id : number) : Observable<Recepcionista> {
    return this.httpClient.get<Recepcionista>(`${this.apiUrl}${id}`, { headers: this.getHeaders() });
  }

  delete(id: number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.getHeaders() });
  }

  update(id : number, recepcionista : any) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${id}`, recepcionista, { headers: this.getHeaders() });
  }

  create(recepcionista : any) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, recepcionista, { headers: this.getHeaders()});
  }
}
