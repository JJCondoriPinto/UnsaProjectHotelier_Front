import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaReservasShowViewComponent } from './recepcionista-reservas-show-view.component';

describe('RecepcionistaReservasShowViewComponent', () => {
  let component: RecepcionistaReservasShowViewComponent;
  let fixture: ComponentFixture<RecepcionistaReservasShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaReservasShowViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaReservasShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
