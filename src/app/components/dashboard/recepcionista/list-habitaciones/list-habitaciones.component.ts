import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/interfaces/Habitacion';
import { HabitacionesService } from 'src/app/services/api/dashboard/habitaciones.service';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  styleUrls: ['./list-habitaciones.component.css']
})
export class ListHabitacionesComponent implements OnInit {

  habitaciones !: Habitacion[];
  title !: string;
  @Input() idSeleccionada !: number
  @Output() idHabitacion = new EventEmitter<number>()

  constructor (private service : HabitacionesService) {}

  ngOnInit(): void {
    this.service.indexDisponible().subscribe((data : Habitacion[]) => {
      this.habitaciones = data;
    })

    this.idSeleccionada ? this.selectHabitacion(this.idSeleccionada) : null;

  }

  selectHabitacion(id : number) : void {
    this.idSeleccionada = id
    this.idHabitacion.emit(id)
    this.title = `Habitacion seleccionada ${this.idSeleccionada}`
  }
}
