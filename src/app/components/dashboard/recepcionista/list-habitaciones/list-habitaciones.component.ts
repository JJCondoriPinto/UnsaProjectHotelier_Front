import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/interfaces/Habitacion';
import { HabitacionesService } from 'src/app/services/api/dashboard/habitaciones.service';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  styleUrls: ['./list-habitaciones.component.css']
})
export class ListHabitacionesComponent {

  habitaciones !: Habitacion[];
  idSeleccionada !: number
  @Output() idHabitacion = new EventEmitter<number>()

  constructor (private service : HabitacionesService) {}

  ngOnInit(): void {

    this.service.indexDisponible().subscribe((data : Habitacion[]) => {
      this.habitaciones = data;
    })

  }

  selectHabitacion(id : number) : void {
    this.idSeleccionada = id
    this.idHabitacion.emit(id)
  }
}
