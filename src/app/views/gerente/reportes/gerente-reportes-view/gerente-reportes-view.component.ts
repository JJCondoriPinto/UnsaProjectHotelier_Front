import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/api/dashboard/reportes.service';

@Component({
  selector: 'app-gerente-reportes-view',
  templateUrl: './gerente-reportes-view.component.html',
  styleUrls: ['./gerente-reportes-view.component.css']
})
export class GerenteReportesViewComponent implements OnInit {

  fieldsCount : any = {
    recepcionistas : null,
    reservas : null,
    habitaciones : null,
  }

  constructor(private service : ReportesService) { }

  ngOnInit(): void {
    this.service.dataCount({"count": ["recepcionistas", "reservas", "habitaciones"] })
    .subscribe({
      next: (data : any) => {
        for(const key in this.fieldsCount) {
          if (data.hasOwnProperty(key)) {
            this.fieldsCount[key] = data[key]
          }
        }
      },
      error: (err :any) => {
        console.log(err);

      }
    })
  }

}
