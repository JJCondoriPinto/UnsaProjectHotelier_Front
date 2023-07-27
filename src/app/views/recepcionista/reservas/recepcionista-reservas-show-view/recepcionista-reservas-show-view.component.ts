import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/Reserva';
import { ReservasService } from 'src/app/services/api/dashboard/reservas.service';

@Component({
  selector: 'app-recepcionista-reservas-show-view',
  templateUrl: './recepcionista-reservas-show-view.component.html',
  styleUrls: ['./recepcionista-reservas-show-view.component.css']
})
export class RecepcionistaReservasShowViewComponent implements OnInit {

  errors : any = {
    fecha_llegada: '',
    cantidad_dias: '' ,
    razon_hospedaje: '' ,
    peticiones: '' ,
  };


  today !: string
  idHabitacion !: number
  ready : boolean = false
  id !: number

  formData !: FormGroup

  constructor(private service : ReservasService, private router : Router) { }

  ngOnInit() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    this.today = `${anio}-${mes}-${dia}`;


    const routes = this.router.url.split('/').splice(0)
    const id = routes[routes.length-1]
    this.id = Number(id)
    this.service.show(this.id).subscribe((data : Reserva) => {
      this.formData = new FormGroup({
        fecha_llegada: new FormControl(data.fecha_llegada, [Validators.required]),
        cantidad_dias: new FormControl(data.cantidad_dias, [Validators.required, Validators.min(1)]),
        razon_hospedaje: new FormControl(data.razon_hospedaje, [Validators.required]),
        peticiones: new FormControl(data.peticiones),
        habitacion_id: new FormControl(data.habitacion_id, [Validators.required])
      })
      this.idHabitacion = Number(data.habitacion_id)
      this.ready = true
    })
  }

  setHabitacion(id : number) {
    this.idHabitacion = id;
    this.formData.value.habitacion_id = id;
  }

  clearError(error : string) {
    if (this.errors.hasOwnProperty(error)) {
      this.errors[error] = "";
    }
  }

  submit() {
    for(const key in this.errors) {
      this.errors[key] = ''
    }
    this.service.update(this.id, this.formData.value as Reserva).subscribe({
      next: (res : any) => {
        console.log(res);
      },
      error: (err : any) => {
        for(const key in this.errors) {
          if (err.error.hasOwnProperty(key)) {
            this.errors[key] = err.error[key]
          }
        }
      }
    })
  }
}
