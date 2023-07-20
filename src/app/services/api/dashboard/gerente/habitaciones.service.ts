import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService extends ApiService{

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}employees/`;

  index() : void {
    this.httpClient.get(this.apiUrl, { headers: this.HEADER }).subscribe((data : any) => {
      console.log(data);
    })
  }

}
