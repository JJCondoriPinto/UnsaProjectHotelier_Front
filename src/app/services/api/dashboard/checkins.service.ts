import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Checkin } from 'src/app/interfaces/Checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinsService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}checkins/`

  index() : Observable<Checkin[]> {
    return this.httpClient.get<Checkin[]>(this.apiUrl, { headers: this.HEADER })
  }

  show(id : number) : Observable<Checkin> {
    return this.httpClient.get<Checkin>(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

  create(idReserva : number) : Observable<any> {
    return this.httpClient.post(this.apiUrl, idReserva, { headers: this.HEADER })
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

}
