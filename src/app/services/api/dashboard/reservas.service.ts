import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Reserva } from 'src/app/interfaces/Reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}reservas/`

  index() : Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.apiUrl}`, { headers: this.HEADER })
  }

  create(data : Reserva) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, data, { headers: this.HEADER })
  }

  show(id : number) : Observable<Reserva> {
    return this.httpClient.get<Reserva>(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

  update(id : number, data : Reserva) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${id}`, data, { headers: this.HEADER })
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

  setPartial(id : number, data : any) : Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}${id}`, data, { headers: this.HEADER })
  }

}
