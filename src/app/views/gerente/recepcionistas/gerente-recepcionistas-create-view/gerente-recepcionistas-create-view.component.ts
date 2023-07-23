import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recepcionista } from 'src/app/interfaces/Recepcionista';
import { RecepcionistasService } from 'src/app/services/api/dashboard/gerente/recepcionistas.service';

@Component({
  selector: 'app-gerente-recepcionistas-create-view',
  templateUrl: './gerente-recepcionistas-create-view.component.html',
  styleUrls: ['./gerente-recepcionistas-create-view.component.css']
})
export class GerenteRecepcionistasCreateViewComponent {

  errors : any = {
    nombres : "",
    apellidos : "",
    dni: "",
    telefono: "",
    turno: "",
    email: "",
    password: ""
  }

  formData : FormGroup = new FormGroup({
    nombres : new FormControl('', [Validators.required]),
    apellidos : new FormControl('', [Validators.required]),
    dni : new FormControl('', [Validators.required, Validators.minLength(8)]),
    telefono : new FormControl('', [Validators.required, Validators.minLength(9)]),
    turno : new FormControl('mañana', [Validators.required]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email : new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private service : RecepcionistasService, private router : Router) { }

  clearError(propiedad : string) {
    this.errors[propiedad] = '';
  }

  submit() {
    let recepcionista = this.formData.value as Recepcionista;
    if(this.formData.valid) {
      this.service.create(recepcionista).subscribe({
        next: ((res : any) => {
          console.log(res);
          this.router.navigate(['dashboard/gerente/recepcionistas/'])
        }),
        error: ((err : any) => {
          for(const key in this.errors) {
            if (err.error.hasOwnProperty(key)) {
              this.errors[key] = err.error[key]
            }
          }
        })
      });
    }
  }


}
