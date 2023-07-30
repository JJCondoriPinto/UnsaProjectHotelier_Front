import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Huesped } from 'src/app/interfaces/Huesped';
import { HuespedesService } from 'src/app/services/api/dashboard/huespedes.service';

@Component({
  selector: 'app-recepcionista-huespedes-view',
  templateUrl: './recepcionista-huespedes-view.component.html',
  styleUrls: ['./recepcionista-huespedes-view.component.css']
})
export class RecepcionistaHuespedesViewComponent implements OnInit {

  huespedes !: Huesped[];

  constructor (private service : HuespedesService, private router : Router) {}

  ngOnInit(): void {

    this.service.index().subscribe((data : Huesped[]) => {
      this.huespedes = data;
    })

  }

  showHuesped(id : number) {
    this.router.navigate([`${this.router.url}/${id}`])
  }

  deleteHuesped(id : number, event : Event): void {
    event.preventDefault()
    event.stopPropagation()
    this.service.delete(id).subscribe((data : any) => {
      this.huespedes = this.huespedes.filter((huesped : Huesped) => huesped.id !== id);
    })
  }

  reservaHuesped(id : number, event : Event) {
    event.preventDefault()
    event.stopPropagation()
    this.router.navigate(['dashboard/recepcionista/reservas/create'], { queryParams: { idTitular:id } });
  }

}
