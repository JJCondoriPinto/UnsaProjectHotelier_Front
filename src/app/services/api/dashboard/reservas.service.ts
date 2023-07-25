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

  show(id : number) : Observable<Reserva> {
    return this.httpClient.get<Reserva>(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

}
