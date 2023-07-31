import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Remind } from 'src/app/interfaces/Remind';

@Injectable({
  providedIn: 'root'
})
export class RemindsService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}reminds/`

  index() : Observable<Remind[]> {
    return this.httpClient.get<Remind[]>(this.apiUrl, { headers: this.getHeaders() })
  }

  show(id : number) : Observable<Remind> {
    return this.httpClient.get<Remind>(`${this.apiUrl}${id}`, { headers: this.getHeaders() })
  }

  create(data : Remind) : Observable<any> {
    return this.httpClient.post(this.apiUrl, data, { headers: this.getHeaders() })
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`, { headers: this.getHeaders() })
  }

}
