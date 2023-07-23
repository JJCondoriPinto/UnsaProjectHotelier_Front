import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contenido } from 'src/app/interfaces/Contenido';
import { Habitacion } from 'src/app/interfaces/Habitacion';
import { HabitacionesService } from 'src/app/services/api/dashboard/gerente/habitaciones.service';

@Component({
  selector: 'app-gerente-habitaciones-show-view',
  templateUrl: './gerente-habitaciones-show-view.component.html',
  styleUrls: ['./gerente-habitaciones-show-view.component.css']
})
export class GerenteHabitacionesShowViewComponent implements OnInit {

  contenido : Contenido[] = []
  imagen !: string
  id !: Number

  errors : any = {
    nro_habitacion : "",
    nro_piso : "",
    tipo_habitacion: "",
    precio: "",
    tamanio: "",
    imagen: ""
  }

  urlImg !: string;
  ready = false

  selectedFile : File | null = null;

  formData !: FormGroup;

  constructor(private service : HabitacionesService, private router : Router) { }

  ngOnInit(): void {
    const urls = this.router.url.split('/').slice(0);
    const id = Number(urls[urls.length-1]);
    this.urlImg = this.service.HOST_API;
    this.id = id
    this.service.show(this.id as number).subscribe({
      next: ((data : any) => {
          this.contenido = data.contenido
          this.formData = new FormGroup({
            nro_habitacion : new FormControl(data.nro_habitacion, [Validators.required, Validators.min(0)]),
            nro_piso : new FormControl(data.nro_piso, [Validators.required, Validators.min(0)]),
            tipo_habitacion : new FormControl(data.tipo_habitacion, [Validators.required]),
            precio : new FormControl(data.precio, [Validators.required, Validators.min(0)]),
            tamanio : new FormControl(data.tamanio, [Validators.required, Validators.min(0)]),
            contenido: new FormControl(this.contenido)
          })
          this.imagen = data.imagen
          this.ready = true;
      }),
      error: ((err : any) => {
        console.log(err);

      })
    })
  }

  clearError(propiedad : string) {
    this.errors[propiedad] = '';
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  submit() {
    let habitacion = this.formData.value as Habitacion;
    if(this.formData.valid) {
      this.service.update(this.id as number, habitacion).subscribe({
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
    this.service.setImage(id, data).subscribe({
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
