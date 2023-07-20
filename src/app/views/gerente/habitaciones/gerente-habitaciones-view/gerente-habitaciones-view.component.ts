import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/api/dashboard/gerente/habitaciones.service';

@Component({
  selector: 'app-gerente-habitaciones-view',
  templateUrl: './gerente-habitaciones-view.component.html',
  styleUrls: ['./gerente-habitaciones-view.component.css']
})
export class GerenteHabitacionesViewComponent implements OnInit {

  constructor (private service : HabitacionesService) {}

  ngOnInit(): void {
      this.service.index();
  }

}
