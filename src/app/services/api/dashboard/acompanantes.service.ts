import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Acompanante } from 'src/app/interfaces/Acompanante';

@Injectable({
  providedIn: 'root'
})
export class AcompanantesService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}acompanantes/`

  index(idTitular : number) : any {
    return this.httpClient.get<Acompanante[]>(`${this.apiUrl}${idTitular}`, { headers: this.HEADER });
  }

  create(idTitular : number, data : Acompanante) : any {
    return this.httpClient.post(`${this.apiUrl}${idTitular}`, data, { headers: this.HEADER });
  }

  update(idTitular : number, id : number, data : Acompanante) : any {
    return this.httpClient.put(`${this.apiUrl}${idTitular}/${id}`, data, { headers: this.HEADER });
  }

  show(idTitular : number, id : number) : any {
    return this.httpClient.get<Acompanante>(`${this.apiUrl}${idTitular}/${id}`, { headers: this.HEADER });
  }

  delete(idTitular : number, id : number) : any {
    return this.httpClient.delete(`${this.apiUrl}${idTitular}/${id}`, { headers: this.HEADER })
  }

}