import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHabitacionesComponent } from './list-habitaciones.component';

describe('ListHabitacionesComponent', () => {
  let component: ListHabitacionesComponent;
  let fixture: ComponentFixture<ListHabitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHabitacionesComponent]
    });
    fixture = TestBed.createComponent(ListHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
