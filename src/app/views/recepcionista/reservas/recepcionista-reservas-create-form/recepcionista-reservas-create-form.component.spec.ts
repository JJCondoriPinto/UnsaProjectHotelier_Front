import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaReservasCreateFormComponent } from './recepcionista-reservas-create-form.component';

describe('RecepcionistaReservasCreateFormComponent', () => {
  let component: RecepcionistaReservasCreateFormComponent;
  let fixture: ComponentFixture<RecepcionistaReservasCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaReservasCreateFormComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaReservasCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
