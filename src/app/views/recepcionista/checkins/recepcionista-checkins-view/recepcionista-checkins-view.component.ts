import { Component, OnInit } from '@angular/core';
import { Checkin } from 'src/app/interfaces/Checkin';
import { CheckinsService } from 'src/app/services/api/dashboard/checkins.service';
import { CheckoutsService } from 'src/app/services/api/dashboard/checkouts.service';

@Component({
  selector: 'app-recepcionista-checkins-view',
  templateUrl: './recepcionista-checkins-view.component.html',
  styleUrls: ['./recepcionista-checkins-view.component.css']
})
export class RecepcionistaCheckinsViewComponent implements OnInit {

  checkins : Checkin[] = []

  constructor(private service : CheckinsService, private serviceCheckout : CheckoutsService) { }

  ngOnInit(): void {
    this.service.index().subscribe((data : Checkin[]) => {
      data.map((value : Checkin) => {
        value.fecha_entrada = new Date(value.fecha_entrada).toDateString()
      })
      this.checkins = data
    })
  }

  deleteCheckin(id : number, event : Event) {
    event.stopPropagation()
    this.service.delete(id).subscribe({
      next: (res : any) => {
        this.checkins = this.checkins.filter((value : Checkin) => value.id !== id)
      },
      error: (err : any) => {
        console.log(err);

      }
    })
  }

  outCheckin(id : number, event : Event) {
    const descripcion = prompt('Descripcion de salida: ')
    this.serviceCheckout.create(id, descripcion).subscribe((res : any) => {
      const checkin = this.checkins.filter((value : Checkin) => value.id === id)[0]
      checkin.estado = 'Inactivo'
    })
  }
}
