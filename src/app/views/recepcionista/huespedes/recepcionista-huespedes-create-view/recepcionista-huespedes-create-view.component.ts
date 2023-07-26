import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Huesped } from 'src/app/interfaces/Huesped';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recepcionista-huespedes-create-view',
  templateUrl: './recepcionista-huespedes-create-view.component.html',
  styleUrls: ['./recepcionista-huespedes-create-view.component.css']
})
export class RecepcionistaHuespedesCreateViewComponent implements OnInit {

  @Output() huespedValid = new EventEmitter<Huesped>();
  @Input() errors : any;


  formData : FormGroup = new FormGroup({
    tipo_identificacion : new FormControl('Dni', [Validators.required, Validators.min(0)]),
    identificacion : new FormControl('', [Validators.required, Validators.minLength(8)]),
    nombres : new FormControl('', [Validators.required]),
    apellidos : new FormControl('', [Validators.required]),
    sexo : new FormControl('Masculino', [Validators.required]),
    fecha_nacimiento: new FormControl('', [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(9)]),
    ruc_empresa: new FormControl('')
  })

  ngOnInit() {
    this.formData.statusChanges.subscribe(() => {
      this.submit()
    })
  }

  clearError(error : string) {
    if (this.errors.hasOwnProperty(error)) {
      this.errors[error] = "";
    }
  }

  submit() {
    const data : Huesped = this.formData.valid ? this.formData.value : null
    this.huespedValid.emit(data)
  }
}
