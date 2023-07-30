import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Huesped } from 'src/app/interfaces/Huesped';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuespedesService } from 'src/app/services/api/dashboard/huespedes.service';

@Component({
  selector: 'app-recepcionista-huespedes-create-view',
  templateUrl: './recepcionista-huespedes-create-view.component.html',
  styleUrls: ['./recepcionista-huespedes-create-view.component.css']
})
export class RecepcionistaHuespedesCreateViewComponent implements OnInit {

  @Output() huespedValid = new EventEmitter<Huesped>();
  @Input() huesped !: Huesped
  @Input() errors : any;

  constructor(private route : ActivatedRoute, private service : HuespedesService) { }

  formData !: FormGroup

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const idTitular = params['idTitular'];
      if(idTitular) {
        this.service.show(idTitular).subscribe({
          next: (data : Huesped) => {
            this.huesped = data
            this.initForm()
            this.submit()
          },
          error: (err : any) => {
            console.log(err);

          }
        })
      }
    });

    this.initForm()

  }

  initForm() : void {
    this.formData = new FormGroup({
      id : new FormControl(this.huesped?.id),
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
