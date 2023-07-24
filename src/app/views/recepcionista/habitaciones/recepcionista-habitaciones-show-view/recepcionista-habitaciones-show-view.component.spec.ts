import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHabitacionesShowViewComponent } from './recepcionista-habitaciones-show-view.component';

describe('RecepcionistaHabitacionesShowViewComponent', () => {
  let component: RecepcionistaHabitacionesShowViewComponent;
  let fixture: ComponentFixture<RecepcionistaHabitacionesShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHabitacionesShowViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHabitacionesShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
