import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteHabitacionesViewComponent } from './gerente-habitaciones-view.component';

describe('GerenteHabitacionesViewComponent', () => {
  let component: GerenteHabitacionesViewComponent;
  let fixture: ComponentFixture<GerenteHabitacionesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteHabitacionesViewComponent]
    });
    fixture = TestBed.createComponent(GerenteHabitacionesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
