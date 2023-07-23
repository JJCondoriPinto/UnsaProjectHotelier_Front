import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Recepcionista } from 'src/app/interfaces/Recepcionista';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistasService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}recepcionistas/`;

  index() : any {
    return this.httpClient.get<Recepcionista[]>(this.apiUrl, { headers: this.HEADER })
  }

}
