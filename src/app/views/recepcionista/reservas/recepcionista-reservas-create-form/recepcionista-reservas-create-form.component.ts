import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/Reserva';
import { ReservasService } from 'src/app/services/api/dashboard/reservas.service';

@Component({
  selector: 'app-recepcionista-reservas-create-form',
  templateUrl: './recepcionista-reservas-create-form.component.html',
  styleUrls: ['./recepcionista-reservas-create-form.component.css']
})
export class RecepcionistaReservasCreateFormComponent implements OnInit {

  @Output() reservaValid = new EventEmitter<Reserva>()
  @Input() errors : any;

  today !: string

  formData !: FormGroup

  ngOnInit() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    this.today = `${anio}-${mes}-${dia}`;

    this.formData = new FormGroup({
      fecha_llegada: new FormControl(this.today, [Validators.required]),
      cantidad_dias: new FormControl(1, [Validators.required, Validators.min(1)]),
      razon_hospedaje: new FormControl('', [Validators.required]),
      peticiones: new FormControl(''),
    })

    this.formData.valueChanges.subscribe(() => {
      this.submit()
    })
  }

  clearError(error : string) {
    if (this.errors.hasOwnProperty(error)) {
      this.errors[error] = "";
    }
  }

  submit() {
    const data : Reserva = this.formData.valid ? this.formData.value : null
    this.reservaValid.emit(data)
  }
}
