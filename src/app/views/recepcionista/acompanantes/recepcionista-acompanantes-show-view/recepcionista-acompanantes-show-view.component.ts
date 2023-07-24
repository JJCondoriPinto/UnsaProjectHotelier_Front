import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Acompanante } from 'src/app/interfaces/Acompanante';
import { AcompanantesService } from 'src/app/services/api/dashboard/acompanantes.service';

@Component({
  selector: 'app-recepcionista-acompanantes-show-view',
  templateUrl: './recepcionista-acompanantes-show-view.component.html',
  styleUrls: ['./recepcionista-acompanantes-show-view.component.css']
})
export class RecepcionistaAcompanantesShowViewComponent implements OnInit {

  formData !: FormGroup;
  idTitular !: number;
  id !: number;
  ready : boolean = false;

  errors : any = {
    nombres : '',
    apellidos : '',
    tipo_identificacion : '',
    identificacion : '' ,
    sexo : '',
    relacion : ''
  }

  constructor(private service : AcompanantesService, private router : Router) { }

  ngOnInit(): void {
    const routes = this.router.url.split('/');
    this.idTitular = Number(routes[routes.length-3])
    this.id = Number(routes[routes.length-1])
    this.service.show(this.idTitular, this.id).subscribe((data : any) => {
      this.formData = new FormGroup({
        nombres : new FormControl(data.nombres, [Validators.required]),
        apellidos : new FormControl(data.apellidos, [Validators.required]),
        tipo_identificacion : new FormControl(data.tipo_identificacion, [Validators.required]),
        identificacion : new FormControl(data.identificacion, [Validators.required, Validators.minLength(8)]),
        sexo : new FormControl(data.sexo, [Validators.required]),
        relacion : new FormControl(data.relacion, [Validators.required]),
      })
      this.ready = true;
    })
  }

  clearError(error : string) {
    if (this.errors.hasOwnProperty(error)) {
      this.errors[error] = ''
    }
  }

  submit() {
    this.service.update(this.idTitular, this.id, this.formData.value as Acompanante).subscribe({
      next: ((res : any) => {
        console.log(res);

      }),
      error: ((err : any) => {
        for(const key in this.errors) {
          if (err.error.hasOwnProperty(key)) {
            this.errors[key] = err.error[key]
          }
        }
      })
    })
  }

}
