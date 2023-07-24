import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contenido } from 'src/app/interfaces/Contenido';
import { HabitacionesService } from 'src/app/services/api/dashboard/habitaciones.service';

@Component({
  selector: 'app-recepcionista-habitaciones-show-view',
  templateUrl: './recepcionista-habitaciones-show-view.component.html',
  styleUrls: ['./recepcionista-habitaciones-show-view.component.css']
})
export class RecepcionistaHabitacionesShowViewComponent implements OnInit {

  contenido : Contenido[] = [];
  imagen !: string;
  id !: number;

  urlImg !: string;
  ready = false;

  changeStatus : boolean = false;
  statusOrigin !: string;

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
            contenido: new FormControl(this.contenido),
            estado: new FormControl(data.estado)
          })
          this.imagen = data.imagen
          this.statusOrigin = data.estado
          this.ready = true;
      }),
      error: ((err : any) => {
        console.log(err);

      })
    })
  }


  submit() {
    const data = new FormData()
    data.append('estado', this.formData.value.estado)
    this.service.setPartial(this.id, data).subscribe({
      next: ((res : any) => {
        console.log('Habitacion actualizada');
        this.statusOrigin = this.formData.value.estado
        this.cambioStatus()
      }),
      error: ((err : any) => {
        console.log(err);

      })
    })
  }

  cambioStatus() {
    this.changeStatus = this.statusOrigin != this.formData.value.estado
  }

}
