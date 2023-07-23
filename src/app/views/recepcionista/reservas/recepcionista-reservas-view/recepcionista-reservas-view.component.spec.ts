import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaReservasViewComponent } from './recepcionista-reservas-view.component';

describe('RecepcionistaReservasViewComponent', () => {
  let component: RecepcionistaReservasViewComponent;
  let fixture: ComponentFixture<RecepcionistaReservasViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaReservasViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaReservasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
