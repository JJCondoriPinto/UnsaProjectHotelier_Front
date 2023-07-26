import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaReservasViewRouterComponent } from './recepcionista-reservas-view-router.component';

describe('RecepcionistaReservasViewRouterComponent', () => {
  let component: RecepcionistaReservasViewRouterComponent;
  let fixture: ComponentFixture<RecepcionistaReservasViewRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaReservasViewRouterComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaReservasViewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
