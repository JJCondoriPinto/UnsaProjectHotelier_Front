import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actions-header-table',
  templateUrl: './actions-header-table.component.html',
  styleUrls: ['./actions-header-table.component.css']
})
export class ActionsHeaderTableComponent {
  @Input() hasButtonCreate : boolean = false
  @Input() hasButtonsSwitch : boolean = true
  @Input() titleButtonCreate : string = '+ Crear'
  @Input() title !: string
}
