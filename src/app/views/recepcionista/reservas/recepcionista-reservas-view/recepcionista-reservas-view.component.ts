import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/Reserva';
import { CheckinsService } from 'src/app/services/api/dashboard/checkins.service';
import { ReservasService } from 'src/app/services/api/dashboard/reservas.service';

@Component({
  selector: 'app-recepcionista-reservas-view',
  templateUrl: './recepcionista-reservas-view.component.html',
  styleUrls: ['./recepcionista-reservas-view.component.css']
})
export class RecepcionistaReservasViewComponent implements OnInit {

  reservas : Reserva[] = []

  constructor(private service : ReservasService, private serviceCheckin : CheckinsService, private router : Router) { }

  ngOnInit(): void {
    this.service.index().subscribe((data : Reserva[]) => {
      this.reservas = data
    })
  }

  showReserva(id : number) {
    this.router.navigate([`${this.router.url}/${id}`])
  }

  checkinReserva(id : number, event : Event) {
    event.stopPropagation()
    alert('Recuerde haber generado los paxx (acompañantes) en la seccion de huespedes')
    this.serviceCheckin.create(id).subscribe({
      next: (res : any) => {
        this.reservas.forEach((reserva : Reserva) => {
          if(reserva.id === id) {
            reserva.estado = 'Registrado'
          }
        })
      },
      error: (err : any) => {
        alert(err.error)
      }
    })
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
          alert(err.error)
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
        alert(err.error)
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
          alert(err.error)
        })
      })
    }
  }

}
