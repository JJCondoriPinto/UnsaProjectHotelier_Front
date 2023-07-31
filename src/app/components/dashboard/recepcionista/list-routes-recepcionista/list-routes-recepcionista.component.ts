import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api/auth/login.service';
import { StorageInfoService } from 'src/app/services/local/storage-info.service';

@Component({
  selector: 'app-list-routes-recepcionista',
  templateUrl: './list-routes-recepcionista.component.html',
  styleUrls: ['./list-routes-recepcionista.component.css']
})
export class ListRoutesRecepcionistaComponent {

  constructor (
    private route : Router,
    private service : LoginService,
    private storage : StorageInfoService) { }

  currentRoute(route : string) {
    return this.route.url.split('/')[3] == route;
  }

  logout() : void {
    this.service.logout().subscribe((res : any) => {
      this.storage.setNull();
      this.route.navigate(['/login'])
    })
  }
}
