import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteHabitacionesViewRouterComponent } from './gerente-habitaciones-view-router.component';

describe('GerenteHabitacionesViewRouterComponent', () => {
  let component: GerenteHabitacionesViewRouterComponent;
  let fixture: ComponentFixture<GerenteHabitacionesViewRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteHabitacionesViewRouterComponent]
    });
    fixture = TestBed.createComponent(GerenteHabitacionesViewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
