import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/interfaces/Checkout';
import { CheckoutsService } from 'src/app/services/api/dashboard/checkouts.service';

@Component({
  selector: 'app-recepcionista-checkouts-view',
  templateUrl: './recepcionista-checkouts-view.component.html',
  styleUrls: ['./recepcionista-checkouts-view.component.css']
})
export class RecepcionistaCheckoutsViewComponent implements OnInit{
  checkouts : Checkout[] = []

  constructor(private service : CheckoutsService) { }

  ngOnInit(): void {
    this.service.index().subscribe((data : Checkout[]) => {
      data.map((checkout : Checkout) => {
        checkout.fecha_salida =  new Date(checkout.fecha_salida).toDateString()
      })
      this.checkouts = data
    })
  }

  deleteCheckout(id : number, event : Event) {
    event.stopPropagation()
    this.service.delete(id).subscribe({
      next: (res : any) => {
        this.checkouts = this.checkouts.filter((checkout : Checkout) => checkout.id != id)
      },
      error: (err : any) => {
        console.log(err);

      }
    })
  }
}
