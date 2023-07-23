import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
    home : "Bienvenido(a)",
    recepcionistas : "Recepcionistas",
    recepcionistascreate: "Registro de recepcionista",
    recepcionistasshow: "Recepcionista ID ",
    habitaciones : "Habitaciones",
    habitacionescreate: "Creación de habitacion",
    habitacionesshow: "Habitacion Nro ",
    reportes : "Reportes",
  }

  constructor (private router : Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.param = "";
    this.routes = this.router.url.split('/').slice(1);
    this.lastRoute = this.routes[this.routes.length-1];
    if(this.lastRoute == 'create') {
      this.lastRoute = this.routes[this.routes.length-2] + this.lastRoute;
    }else if(/^\d+$/.test(this.lastRoute.toString())) {
      this.param = this.lastRoute
      this.lastRoute = this.routes[this.routes.length-2] + 'show';
    }
    this.title = this.titles[this.lastRoute.toString()] + this.param;
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
