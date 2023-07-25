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
    return this.httpClient.get<Huesped[]>(this.apiUrl, { headers: this.HEADER });
  }

  show(id : number) : Observable<Huesped> {
    return this.httpClient.get<Huesped>(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

  update(id: number, data: Huesped) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${id}`, data, { headers: this.HEADER })
  }

}
