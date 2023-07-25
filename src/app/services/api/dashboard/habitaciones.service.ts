import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Habitacion } from 'src/app/interfaces/Habitacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService extends ApiService{

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}habitaciones/`;

  index() : Observable<Habitacion[]> {
    return this.httpClient.get<Habitacion[]>(this.apiUrl, { headers: this.HEADER });
  }

  show(id : number) : Observable<Habitacion> {
    return this.httpClient.get<Habitacion>(`${this.apiUrl}${id}`, { headers: this.HEADER });
  }

  delete(id: number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.HEADER });
  }

  update(id : number, habitacion : any) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${id}`, habitacion, { headers: this.HEADER });
  }

  create(habitacion : any) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, habitacion, { headers: this.HEADER});
  }

  setPartial(id : number, data : any) : Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}${id}`, data, { headers: this.HEADER})
  }

}
