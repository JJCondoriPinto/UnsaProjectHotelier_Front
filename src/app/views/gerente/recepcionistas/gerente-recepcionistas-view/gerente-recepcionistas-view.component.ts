import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recepcionista } from 'src/app/interfaces/Recepcionista';
import { RecepcionistasService } from 'src/app/services/api/dashboard/recepcionistas.service';

@Component({
  selector: 'app-gerente-recepcionistas-view',
  templateUrl: './gerente-recepcionistas-view.component.html',
  styleUrls: ['./gerente-recepcionistas-view.component.css']
})
export class GerenteRecepcionistasViewComponent implements OnInit {

  recepcionistas : Recepcionista[] = []

  constructor (private service : RecepcionistasService, private router : Router) {}

  ngOnInit(): void {
    this.service.index().subscribe((data : any) => {
      this.recepcionistas = data
    })
  }

  showRecepcionista(id : number) {
    this.router.navigate([`${this.router.url}/${id.toString()}`])
  }

  deleteRecepcionista(id : number, event : Event) {
    event.preventDefault()
    event.stopPropagation()
    this.service.delete(id).subscribe((data : any) => {
      this.recepcionistas = this.recepcionistas.filter((recepcionista : Recepcionista) => recepcionista.id !== id);
    })
  }

}
