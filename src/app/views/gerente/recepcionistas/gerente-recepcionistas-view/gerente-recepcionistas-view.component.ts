import { Component, OnInit } from '@angular/core';
import { RecepcionistasService } from 'src/app/services/api/dashboard/gerente/recepcionistas.service';

@Component({
  selector: 'app-gerente-recepcionistas-view',
  templateUrl: './gerente-recepcionistas-view.component.html',
  styleUrls: ['./gerente-recepcionistas-view.component.css']
})
export class GerenteRecepcionistasViewComponent implements OnInit {

  constructor (private service : RecepcionistasService) {}

  ngOnInit(): void {
      this.service.index();
  }

}
