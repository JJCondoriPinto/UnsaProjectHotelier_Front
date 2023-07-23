import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteHabitacionesCreateViewComponent } from './gerente-habitaciones-create-view.component';

describe('GerenteHabitacionesCreateViewComponent', () => {
  let component: GerenteHabitacionesCreateViewComponent;
  let fixture: ComponentFixture<GerenteHabitacionesCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteHabitacionesCreateViewComponent]
    });
    fixture = TestBed.createComponent(GerenteHabitacionesCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
