import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Huesped } from 'src/app/interfaces/Huesped';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuespedesService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}huespedes/`;

  index() : Observable<Huesped[]> {
    return this.httpClient.get<Huesped[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  show(id : number) : Observable<Huesped> {
    return this.httpClient.get<Huesped>(`${this.apiUrl}${id}`, { headers: this.getHeaders() })
  }

  create(data : Huesped) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, data, { headers: this.getHeaders() })
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.getHeaders() })
  }

  update(id: number, data: Huesped) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${id}`, data, { headers: this.getHeaders() })
  }

}
