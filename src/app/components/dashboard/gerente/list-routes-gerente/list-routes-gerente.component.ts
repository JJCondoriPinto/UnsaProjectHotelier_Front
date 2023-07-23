import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-routes-gerente',
  templateUrl: './list-routes-gerente.component.html',
  styleUrls: ['./list-routes-gerente.component.css']
})
export class ListRoutesGerenteComponent {

  constructor (private route : Router) { }

  currentRoute(route : string) {
    return this.route.url.split('/')[3] == route;
  }
}
