import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-header-table',
  templateUrl: './actions-header-table.component.html',
  styleUrls: ['./actions-header-table.component.css']
})
export class ActionsHeaderTableComponent implements OnInit{
  @Input() hasButtonCreate : boolean = false
  @Input() hasButtonsSwitch : boolean = true
  @Input() titleButtonCreate : string = '+ Crear'
  @Input() title !: string

  input !: string
  input_field !: string
  headers : string[] = []
  table !: Element

  ngOnInit(): void {
    this.table = document.getElementsByClassName('table')[0]
    const rowHead = this.table.querySelector('.table__row--head')?.childNodes
    rowHead?.forEach((node : ChildNode) => {
      this.headers.push(node.textContent ? node.textContent : "")
    })
    this.input_field = this.headers[0]
  }

  search() {
    const index = this.headers.indexOf(this.input_field)
    const auxRows = this.table.getElementsByClassName('table__row--data');
    const rows = Object.values(auxRows) as HTMLElement[]
    rows.forEach((row : HTMLElement) => {
      const value = row.children.item(index)?.textContent
      if(!value?.toLowerCase()?.includes(this.input.toLowerCase())) {
        row.classList.add('hidden_row')
      } else {
        row.classList.remove('hidden_row')
      }
    })

  }
}
