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

  deleteReserva(id : number, event : Event) {

  }

}
