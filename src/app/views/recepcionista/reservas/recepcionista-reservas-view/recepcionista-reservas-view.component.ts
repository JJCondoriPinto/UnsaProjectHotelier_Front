import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/Reserva';
import { ReservasService } from 'src/app/services/api/dashboard/reservas.service';

@Component({
  selector: 'app-recepcionista-reservas-view',
  templateUrl: './recepcionista-reservas-view.component.html',
  styleUrls: ['./recepcionista-reservas-view.component.css']
})
export class RecepcionistaReservasViewComponent implements OnInit {

  reservas : Reserva[] = []

  constructor(private service : ReservasService, private router : Router) { }

  ngOnInit(): void {
    this.service.index().subscribe((data : Reserva[]) => {
      data.map((reserva : Reserva) => {
        reserva.fecha_llegada = new Date(reserva.fecha_llegada).toDateString()
      })
      this.reservas = data
    })
  }

  showReserva(id : number) {

  }

  checkinReserva(id : number, event : Event) {
    event.stopPropagation()

  }

  cancelReserva(id : number, event : Event) {
    event.stopPropagation()
    if (confirm('¿Desea cancelar la reserva?')) {
      this.service.setPartial(id, {'estado': 'Cancelado'}).subscribe({
        next: ((res : any) => {
          const reserva = this.reservas.filter((reserva : Reserva) => reserva.id === id)
          reserva[0].estado = 'Cancelado'
        }),
        error: ((err : any) => {
          console.log(err);
        })
      })
    }
  }

  returnReserva(id : number, event : Event) {
    event.stopPropagation()
    this.service.setPartial(id, {'estado': 'Pendiente'}).subscribe({
      next: ((res : any) => {
        const reserva = this.reservas.filter((reserva : Reserva) => reserva.id === id)
        reserva[0].estado = 'Pendiente'
      }),
      error: ((err : any) => {
        console.log(err);
      })
    })
  }

  deleteReserva(id : number, event : Event) {
    event.stopPropagation()
    if (confirm('¿Está seguro de eliminar esta reserva?')) {
      this.service.delete(id).subscribe({
        next: ((res : any) => {
          this.reservas = this.reservas.filter((reserva : Reserva) => reserva.id !== id)
        }),
        error: ((err : any) => {
          console.log(err);
        })
      })
    }
  }

}
