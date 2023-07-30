import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Remind } from 'src/app/interfaces/Remind';
import { RemindsService } from 'src/app/services/api/dashboard/reminds.service';

@Component({
  selector: 'app-reminds',
  templateUrl: './reminds.component.html',
  styleUrls: ['./reminds.component.css']
})
export class RemindsComponent {
  reminds : Remind[] = []

  modalOverlay !: HTMLElement
  errors : any = {
    titulo: '',
    descripcion: ''
  }

  formData !: FormGroup

  constructor(private service : RemindsService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      titulo : new FormControl('', [Validators.required]),
      descripcion : new FormControl('', [Validators.required])
    })

    this.modalOverlay = document.querySelector(".modal-overlay") as HTMLElement;

    this.service.index().subscribe((data : Remind[]) => {
      this.reminds = data
    })
  }

  closeRemind(event : Event | null) {
    event?.preventDefault();
    this.modalOverlay.style.display = "none";
    this.formData.reset()
    for(const key in this.errors) {
      this.errors[key] = ''
    }
  }

  openRemind() {
    this.modalOverlay.style.display = "block";
  }

  addRemind() {
    this.service.create(this.formData.value as Remind).subscribe({
      next: (data : Remind) => {
        this.reminds.unshift(data)
        this.closeRemind(null);
      },
      error: (err : any) => {
        for(const key in this.errors) {
          if (err.error.hasOwnProperty(key)) {
            this.errors[key] = err.error[key]
          }
        }
      }
    })
  }

  deleteRemind(id : number) {
    this.service.delete(id).subscribe({
      next: (res : any) => {
        this.reminds = this.reminds.filter((remind : Remind) => remind.id !== id)
      },
      error: (err :any) => {
        console.log(err);

      }
    })
  }
}
