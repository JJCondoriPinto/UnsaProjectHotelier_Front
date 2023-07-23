import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHabitacionesViewComponent } from './recepcionista-habitaciones-view.component';

describe('RecepcionistaHabitacionesViewComponent', () => {
  let component: RecepcionistaHabitacionesViewComponent;
  let fixture: ComponentFixture<RecepcionistaHabitacionesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHabitacionesViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHabitacionesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
