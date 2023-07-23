import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-routes-recepcionista',
  templateUrl: './list-routes-recepcionista.component.html',
  styleUrls: ['./list-routes-recepcionista.component.css']
})
export class ListRoutesRecepcionistaComponent {

  constructor (private route : Router) { }

  currentRoute(route : string) {
    return this.route.url.split('/')[3] == route;
  }
}
