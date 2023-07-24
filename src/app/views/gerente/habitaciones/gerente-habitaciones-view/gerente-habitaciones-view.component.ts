import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/interfaces/Habitacion';
import { HabitacionesService } from 'src/app/services/api/dashboard/habitaciones.service';

@Component({
  selector: 'app-gerente-habitaciones-view',
  templateUrl: './gerente-habitaciones-view.component.html',
  styleUrls: ['./gerente-habitaciones-view.component.css']
})
export class GerenteHabitacionesViewComponent implements OnInit {

  habitaciones !: Habitacion[];
  urlImg !: string;

  constructor (private service : HabitacionesService, private router : Router) {}

  ngOnInit(): void {

    this.service.index().subscribe((data : Habitacion[]) => {
      this.urlImg = `${this.service.HOST_API}`
      this.habitaciones = data;
    })

  }

  deleteHabitacion(id : number, event : Event): void {
    event.preventDefault()
    event.stopPropagation()
    this.service.delete(id).subscribe((data : any) => {
      this.habitaciones = this.habitaciones.filter((habitacion : Habitacion) => habitacion.id !== id);
    })
  }

  showHabitacion(id : number) : void {
    this.router.navigate([`${this.router.url}/${id.toString()}`]);
  }

}
