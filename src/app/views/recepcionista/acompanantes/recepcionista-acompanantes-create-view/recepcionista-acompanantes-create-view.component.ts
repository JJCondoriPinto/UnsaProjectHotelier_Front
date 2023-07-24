import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Acompanante } from 'src/app/interfaces/Acompanante';
import { AcompanantesService } from 'src/app/services/api/dashboard/acompanantes.service';

@Component({
  selector: 'app-recepcionista-acompanantes-create-view',
  templateUrl: './recepcionista-acompanantes-create-view.component.html',
  styleUrls: ['./recepcionista-acompanantes-create-view.component.css']
})
export class RecepcionistaAcompanantesCreateViewComponent implements OnInit {

  formData : FormGroup = new FormGroup({
    nombres : new FormControl('', [Validators.required]),
    apellidos : new FormControl('', [Validators.required]),
    tipo_identificacion : new FormControl('Dni', [Validators.required]),
    identificacion : new FormControl('', [Validators.required, Validators.minLength(8)]),
    sexo : new FormControl('Masculino', [Validators.required]),
    relacion : new FormControl('', [Validators.required]),
  })

  idTitular !: number;
  id !: number;
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
    this.idTitular = Number(routes[routes.length-2])
    this.id = Number(routes[routes.length-1])
    this.formData.addControl('titular_id', new FormControl(this.idTitular))
  }

  clearError(error : string) {
    if (this.errors.hasOwnProperty(error)) {
      this.errors[error] = ''
    }
  }

  submit() {
    console.log(this.formData.pristine);

    // this.service.create(this.idTitular, this.formData.value as Acompanante).subscribe({
    //   next: ((res : any) => {
    //     this.router.navigate([`dashboard/recepcionista/huespedes/${this.idTitular}`])
    //   }),
    //   error: ((err : any) => {
    //     for(const key in this.errors) {
    //       if (err.error.hasOwnProperty(key)) {
    //         this.errors[key] = err.error[key]
    //       }
    //     }
    //   })
    // })
  }
}
