import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageInfoService } from 'src/app/services/local/storage-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routes !: string[];
  title !: string;
  param : string = "";

  private lastRoute !: string
  private titles : any = {
    home : "Bienvenido(a) ",

    recepcionistas : "Recepcionistas",
    recepcionistascreate: "Registro de recepcionista",
    recepcionistasshow: "Recepcionista ID ",

    habitaciones : "Habitaciones",
    habitacionescreate: "Creación de habitacion",
    habitacionesshow: "Habitacion Nro ",

    huespedes : "Huespedes registrados",
    huespedesshow : "Huesped ID ",

    reservas : "Reservas actuales",
    reservasshow : "Reserva ID ",
    reservascreate : "Generacion de reserva",

    checkins : "Check ins (entradas)",

    checkouts : "Check outs (salidas)",

    reportes : "Reportes",
  }

  constructor (private router : Router, private service : StorageInfoService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.param = "";
    this.routes = this.router.url.split('/').slice(1);
    this.lastRoute = this.routes.length > 3 ? this.routes[3] : this.routes[2];
    if (this.lastRoute) {
      if(this.lastRoute.includes('create')) {
        this.lastRoute = this.routes[2] + 'create';
      }else if(/^\d+$/.test(this.lastRoute.toString())) {
        this.param = this.lastRoute
        this.lastRoute = this.routes[2] + 'show';
      }else if(this.lastRoute == 'home') {
        this.param = this.service.getNombres()
      }
      this.title = this.titles[this.lastRoute.toString()] + this.param;
    }
  }

  changeTheme() {
    let modeSwitch = document.querySelector('.mode-switch');
    document.documentElement.classList.toggle('dark');
    modeSwitch?.classList.toggle('active');
  }

  collapseSide() {
    document.getElementById('sidebar')?.classList.toggle('hidden');
  }

}
