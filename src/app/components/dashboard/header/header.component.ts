import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routes !: string[];

  constructor (private router : Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.routes = this.router.url.split('/').slice(1);
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
