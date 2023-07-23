import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteHabitacionesShowViewComponent } from './gerente-habitaciones-show-view.component';

describe('GerenteHabitacionesShowViewComponent', () => {
  let component: GerenteHabitacionesShowViewComponent;
  let fixture: ComponentFixture<GerenteHabitacionesShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteHabitacionesShowViewComponent]
    });
    fixture = TestBed.createComponent(GerenteHabitacionesShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
