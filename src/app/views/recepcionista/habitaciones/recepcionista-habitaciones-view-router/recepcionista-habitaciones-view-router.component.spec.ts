import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHabitacionesViewRouterComponent } from './recepcionista-habitaciones-view-router.component';

describe('RecepcionistaHabitacionesViewRouterComponent', () => {
  let component: RecepcionistaHabitacionesViewRouterComponent;
  let fixture: ComponentFixture<RecepcionistaHabitacionesViewRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHabitacionesViewRouterComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHabitacionesViewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
