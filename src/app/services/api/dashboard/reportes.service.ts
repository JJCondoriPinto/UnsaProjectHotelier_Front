import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}reports/`

  dataCount(params : any) : Observable<any> {
    return this.httpClient.get(this.apiUrl, { headers: this.HEADER, params: params })
  }

}
