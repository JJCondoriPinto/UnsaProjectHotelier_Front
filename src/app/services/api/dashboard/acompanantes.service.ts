import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Acompanante } from 'src/app/interfaces/Acompanante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcompanantesService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}acompanantes/`

  index(idTitular : number) : Observable<Acompanante[]> {
    return this.httpClient.get<Acompanante[]>(`${this.apiUrl}${idTitular}`, { headers: this.getHeaders() });
  }

  create(idTitular : number, data : Acompanante) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}${idTitular}`, data, { headers: this.getHeaders() });
  }

  update(idTitular : number, id : number, data : Acompanante) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${idTitular}/${id}`, data, { headers: this.getHeaders() });
  }

  show(idTitular : number, id : number) : Observable<Acompanante>  {
    return this.httpClient.get<Acompanante>(`${this.apiUrl}${idTitular}/${id}`, { headers: this.getHeaders() });
  }

  delete(idTitular : number, id : number) : Observable<any>  {
    return this.httpClient.delete(`${this.apiUrl}${idTitular}/${id}`, { headers: this.getHeaders() })
  }

}
