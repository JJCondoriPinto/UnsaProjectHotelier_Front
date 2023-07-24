import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Huesped } from 'src/app/interfaces/Huesped';
import { HuespedesService } from 'src/app/services/api/dashboard/huespedes.service';

@Component({
  selector: 'app-recepcionista-huespedes-show-view',
  templateUrl: './recepcionista-huespedes-show-view.component.html',
  styleUrls: ['./recepcionista-huespedes-show-view.component.css']
})
export class RecepcionistaHuespedesShowViewComponent {

  contenido : Huesped[] = [];
  id !: number;
  title_acompanantes : string = 'Acompañantes'
  errors : any = {
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

  ready = false;

  formData !: FormGroup;

  constructor(private service : HuespedesService, private router : Router) {
    const urls = this.router.url.split('/').slice(1);
    const id = Number(urls[3]);
    this.id = id
  }

  ngOnInit(): void {
    this.service.show(this.id as number).subscribe({
      next: ((data : any) => {
          this.contenido = data.contenido
          this.formData = new FormGroup({
            tipo_identificacion : new FormControl(data.tipo_identificacion, [Validators.required, Validators.min(0)]),
            identificacion : new FormControl(data.identificacion, [Validators.required, Validators.min(0)]),
            nombres : new FormControl(data.nombres, [Validators.required]),
            apellidos : new FormControl(data.apellidos, [Validators.required, Validators.min(0)]),
            sexo : new FormControl(data.sexo, [Validators.required, Validators.min(0)]),
            fecha_nacimiento: new FormControl(data.fecha_nacimiento),
            nacionalidad: new FormControl(data.nacionalidad),
            region: new FormControl(data.region),
            telefono: new FormControl(data.telefono),
            ruc_empresa: new FormControl(data.ruc_empresa)
          })
          this.ready = true;
      }),
      error: ((err : any) => {
        console.log(err);
      })
    })
  }

  clearError(error : string) {
    if (this.errors.hasOwnProperty(error)) {
      this.errors[error] = "";
    }
  }

  submit() {
    this.service.update(this.id, this.formData.value as Huesped).subscribe({
      next: ((res : any) => {
        console.log(res);

      }),
      error: ((err : any) => {
        console.log(err);

        for(const key in this.errors) {
          if (err.error.hasOwnProperty(key)) {
            this.errors[key] = err.error[key]
          }
        }
      })
    })
  }
}
