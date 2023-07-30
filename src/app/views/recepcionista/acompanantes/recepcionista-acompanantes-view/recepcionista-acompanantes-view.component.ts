import { Component, OnInit } from '@angular/core';
import { Route, Router, UrlTree } from '@angular/router';
import { Acompanante } from 'src/app/interfaces/Acompanante';
import { AcompanantesService } from 'src/app/services/api/dashboard/acompanantes.service';

@Component({
  selector: 'app-recepcionista-acompanantes-view',
  templateUrl: './recepcionista-acompanantes-view.component.html',
  styleUrls: ['./recepcionista-acompanantes-view.component.css']
})
export class RecepcionistaAcompanantesViewComponent implements OnInit {

  acompanantes : Acompanante[] = []
  estadoTitular : boolean = false // Si esta o no hospedado
  idTitular !: number;

  constructor(private service : AcompanantesService, private router : Router) { }

  ngOnInit(): void {
    const routes = this.router.url.split('/');
    this.idTitular = Number(routes[routes.length-1])
    this.service.index(this.idTitular).subscribe((data : any) => {
      this.acompanantes = data.acompanantes
      this.estadoTitular = data.estadoTitular
    })
  }

  showAcompanante(id : number, event : Event) : void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([`${this.router.url}/acompanantes/${id}`]);
  }

  deleteAcompanante(id : number, event : Event) : void {
    event.preventDefault();
    event.stopPropagation();
    this.service.delete(this.idTitular, id).subscribe((res : any) => {
      this.acompanantes = this.acompanantes.filter((row : Acompanante) => row.id !== id );
    })
  }

}
