import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recepcionista } from 'src/app/interfaces/Recepcionista';
import { RecepcionistasService } from 'src/app/services/api/dashboard/recepcionistas.service';

@Component({
  selector: 'app-gerente-recepcionistas-show-view',
  templateUrl: './gerente-recepcionistas-show-view.component.html',
  styleUrls: ['./gerente-recepcionistas-show-view.component.css']
})
export class GerenteRecepcionistasShowViewComponent implements OnInit{
  errors : any = {
    nombres : "",
    apellidos : "",
    dni: "",
    telefono: "",
    turno: "",
    email: "",
    password: ""
  }
  id !: number
  ready :boolean = false;
  formData !: FormGroup;

  constructor(private service : RecepcionistasService, private router : Router ) { }

  ngOnInit(): void {
    const url = this.router.url.split('/')
    const id = url[url.length-1];
    this.id = Number(id);
    this.service.show(this.id).subscribe((data : any) => {
      this.formData = new FormGroup({
        nombres : new FormControl(data.nombres, [Validators.required]),
        apellidos : new FormControl(data.apellidos, [Validators.required]),
        dni : new FormControl(data.dni, [Validators.required, Validators.minLength(8)]),
        telefono : new FormControl(data.telefono, [Validators.required, Validators.minLength(9)]),
        turno : new FormControl(data.turno, [Validators.required]),
        password : new FormControl(''),
        confirmPassword: new FormControl(''),
        email : new FormControl(data.email, [Validators.required, Validators.email])
      })
      this.ready = true
    })
  }

  clearError(propiedad : string) {
    this.errors[propiedad] = '';
  }

  submit() {
    let recepcionista = this.formData.value as Recepcionista;
    if(this.formData.valid) {
      this.service.update(this.id, recepcionista).subscribe({
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
      });
    }
  }
}
