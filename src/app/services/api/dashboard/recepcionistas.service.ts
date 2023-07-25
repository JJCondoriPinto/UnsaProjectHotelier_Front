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
    return this.httpClient.get<Recepcionista[]>(this.apiUrl, { headers: this.HEADER })
  }

  show(id : number) : Observable<Recepcionista> {
    return this.httpClient.get<Recepcionista>(`${this.apiUrl}${id}`, { headers: this.HEADER });
  }

  delete(id: number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.HEADER });
  }

  update(id : number, recepcionista : any) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${id}`, recepcionista, { headers: this.HEADER });
  }

  create(recepcionista : any) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, recepcionista, { headers: this.HEADER});
  }
}
