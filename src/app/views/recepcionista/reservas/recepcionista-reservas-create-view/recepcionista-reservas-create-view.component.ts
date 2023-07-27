import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Huesped } from 'src/app/interfaces/Huesped';
import { Reserva } from 'src/app/interfaces/Reserva';
import { HuespedesService } from 'src/app/services/api/dashboard/huespedes.service';
import { ReservasService } from 'src/app/services/api/dashboard/reservas.service';

@Component({
  selector: 'app-recepcionista-reservas-create-view',
  templateUrl: './recepcionista-reservas-create-view.component.html',
  styleUrls: ['./recepcionista-reservas-create-view.component.css']
})
export class RecepcionistaReservasCreateViewComponent {

  huesped !: Huesped
  reserva !: Reserva
  idHabitacion !: number

  errorsHuesped : any = {
    tipo_identificacion : '',
    identificacion : '',
    nombres : '',
    apellidos : '',
    sexo : '',
    fecha_nacimiento: '',
    nacionalidad: '',
    region: '',
    telefono: '',
    ruc_empresa: ''
  }

  errorsReserva : any = {
    fecha_llegada: '',
    cantidad_dias: '' ,
    razon_hospedaje: '' ,
    peticiones: '' ,
  }

  constructor(private serviceHuesped : HuespedesService, private serviceReserva : ReservasService) { }

  submit() {
    if(this.reserva && this.huesped && this.idHabitacion) {
      this.createHuesped(this.huesped)
    }
  }

  setReserva(reserva : Reserva) {
    this.reserva = reserva;
  }

  setHuesped(huesped : Huesped) {
    this.huesped = huesped;
  }

  setIdHabitacion(id : number) {
    this.idHabitacion = id
  }

  createHuesped(huesped : Huesped) {
    for(const key in this.errorsHuesped) {
      this.errorsHuesped[key] = ''
    }
    this.serviceHuesped.create(huesped).subscribe({
      next: (res : any) => {
        this.reserva.titular_id = res.id
        this.reserva.habitacion_id = this.idHabitacion
        this.createReserva()
      },
      error: (err : any) => {
        for(const key in this.errorsHuesped) {
          if (err.error.hasOwnProperty(key)) {
            this.errorsHuesped[key] = err.error[key]
          }
        }
      }
    })
  }

  createReserva() {
    for(const key in this.errorsReserva) {
      this.errorsReserva[key] = ''
    }
    this.serviceReserva.create(this.reserva).subscribe({
      next: (res : any) => {
        console.log(res);

      },
      error: (err : any) => {
        for(const key in this.errorsReserva) {
          if (err.error.hasOwnProperty(key)) {
            this.errorsReserva[key] = err.error[key]
          }
        }
      }
    })
  }

}
