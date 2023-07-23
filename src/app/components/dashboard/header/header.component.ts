import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private titles : any = {
    home : "Bienvenido(a)",
    habitaciones : "Habitaciones",
    recepcionistas : "Recepcionistas",
    reportes : "Reportes",
    habitacionescreate: "Creación de habitacion"
  }

  private lastRoute !: String
  routes !: string[];
  title !: string;

  constructor (private router : Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.routes = this.router.url.split('/').slice(1);
    this.lastRoute = this.routes[this.routes.length-1];
    if(this.lastRoute == 'create') {
      this.lastRoute = this.routes[this.routes.length-2] + this.lastRoute;
    }
    this.title = this.titles[this.lastRoute.toString()];
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
