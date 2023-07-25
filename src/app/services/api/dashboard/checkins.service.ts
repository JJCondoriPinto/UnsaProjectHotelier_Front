import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckinsService extends ApiService {

  private apiUrl : string = `${this.HOST_API}${this.API_BACK}checkins`

}
