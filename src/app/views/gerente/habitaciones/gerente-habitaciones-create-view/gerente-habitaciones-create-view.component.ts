import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contenido } from 'src/app/interfaces/Contenido';
import { Habitacion } from 'src/app/interfaces/Habitacion';
import { HabitacionesService } from 'src/app/services/api/dashboard/habitaciones.service';

@Component({
  selector: 'app-gerente-habitaciones-create-view',
  templateUrl: './gerente-habitaciones-create-view.component.html',
  styleUrls: ['./gerente-habitaciones-create-view.component.css']
})
export class GerenteHabitacionesCreateViewComponent {

  contenido : Contenido[] = []
  errors : any = {
    nro_habitacion : "",
    nro_piso : "",
    tipo_habitacion: "",
    precio: "",
    tamanio: "",
    imagen: ""
  }
  selectedFile : File | null = null;

  formData : FormGroup = new FormGroup({
    nro_habitacion : new FormControl('', [Validators.required, Validators.min(0)]),
    nro_piso : new FormControl('', [Validators.required, Validators.min(0)]),
    tipo_habitacion : new FormControl('', [Validators.required]),
    precio : new FormControl('', [Validators.required, Validators.min(0)]),
    tamanio : new FormControl('', [Validators.required, Validators.min(0)]),
    contenido: new FormControl(this.contenido)
  })

  constructor(private service : HabitacionesService, private router : Router) { }

  clearError(propiedad : string) {
    this.errors[propiedad] = '';
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  submit() {
    let habitacion = this.formData.value as Habitacion;
    if(this.formData.valid) {
      this.service.create(habitacion).subscribe({
        next: ((res : any) => {
          if(this.selectedFile !== null) {
            this.setImage(res.id, this.selectedFile)
          } else {
            this.router.navigate(['dashboard/gerente/habitaciones/']);
          }
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

  setImage(id : number, file : File) {
    const data = new FormData();
    data.append('image', file, file.name);
    this.service.setPartial(id, data).subscribe({
      next: ((res : any) => {
        this.router.navigate(['dashboard/gerente/habitaciones/']);
      }),
      error: (err : any) => {
        this.errors['imagen'] = err.error['imagen'];
      }
    })
  }

  addContenido() {
    this.contenido.push(new Object() as Contenido)
  }

  minContenido() {
    this.contenido.pop()
  }

}
