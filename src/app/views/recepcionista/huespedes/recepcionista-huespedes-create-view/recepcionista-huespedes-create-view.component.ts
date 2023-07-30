import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Huesped } from 'src/app/interfaces/Huesped';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recepcionista-huespedes-create-view',
  templateUrl: './recepcionista-huespedes-create-view.component.html',
  styleUrls: ['./recepcionista-huespedes-create-view.component.css']
})
export class RecepcionistaHuespedesCreateViewComponent implements OnInit, OnChanges {

  @Output() huespedValid = new EventEmitter<Huesped>();
  @Input() huesped !: Huesped
  @Input() errors : any;


  formData !: FormGroup

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['huesped']) {
      this.initForm()
    }
  }

  ngOnInit() {
    this.formData.statusChanges.subscribe(() => {
      this.submit()
    })
  }

  initForm() : void {
    this.formData = new FormGroup({
      tipo_identificacion : new FormControl(this.huesped ? this.huesped.tipo_identificacion : 'Dni', [Validators.required, Validators.min(0)]),
      identificacion : new FormControl(this.huesped?.identificacion, [Validators.required, Validators.minLength(8)]),
      nombres : new FormControl(this.huesped?.nombres, [Validators.required]),
      apellidos : new FormControl(this.huesped?.apellidos, [Validators.required]),
      sexo : new FormControl(this.huesped ? this.huesped.sexo : 'Masculino', [Validators.required]),
      fecha_nacimiento: new FormControl(this.huesped?.fecha_nacimiento, [Validators.required]),
      nacionalidad: new FormControl(this.huesped?.nacionalidad, [Validators.required]),
      region: new FormControl(this.huesped?.region, [Validators.required]),
      telefono: new FormControl(this.huesped?.telefono, [Validators.required, Validators.minLength(9)]),
      ruc_empresa: new FormControl(this.huesped?.ruc_empresa)
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
