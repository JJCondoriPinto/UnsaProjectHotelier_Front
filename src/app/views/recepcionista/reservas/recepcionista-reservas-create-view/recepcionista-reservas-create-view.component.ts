import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Huesped } from 'src/app/interfaces/Huesped';
import { Reserva } from 'src/app/interfaces/Reserva';
import { HuespedesService } from 'src/app/services/api/dashboard/huespedes.service';
import { ReservasService } from 'src/app/services/api/dashboard/reservas.service';

@Component({
  selector: 'app-recepcionista-reservas-create-view',
  templateUrl: './recepcionista-reservas-create-view.component.html',
  styleUrls: ['./recepcionista-reservas-create-view.component.css']
})
export class RecepcionistaReservasCreateViewComponent implements OnInit {

  huesped !: Huesped
  reserva !: Reserva
  idHabitacion !: number
  onlyBooking : boolean = false

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

  constructor(private serviceHuesped : HuespedesService, private serviceReserva : ReservasService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idTitular = params['idTitular'];
      this.serviceHuesped.show(idTitular).subscribe({
        next: (data : Huesped) => {
          this.huesped = data
          this.onlyBooking = true
        },
        error: (err : any) => {
          console.log(err);

        }
      })
    });
  }

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
    const call = this.onlyBooking ?
    this.serviceHuesped.update(huesped.id, huesped) :
    this.serviceHuesped.create(huesped)

    call.subscribe({
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
