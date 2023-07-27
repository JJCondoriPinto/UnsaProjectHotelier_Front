import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Checkout } from 'src/app/interfaces/Checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutsService extends ApiService{

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}checkouts/`

  index() : Observable<Checkout[]> {
    return this.httpClient.get<Checkout[]>(this.apiUrl, { headers: this.HEADER })
  }

  show(id : number) : Observable<Checkout> {
    return this.httpClient.get<Checkout>(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

  create(idCheckin : number, descripcion_salida : string | null) : Observable<any> {
    return this.httpClient.post(this.apiUrl, {
      'checkin_id': idCheckin,
      'descripcion_salida': descripcion_salida
    }, { headers: this.HEADER })
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.HEADER })
  }

}
