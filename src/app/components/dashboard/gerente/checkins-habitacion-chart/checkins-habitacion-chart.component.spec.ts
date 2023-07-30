import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinsHabitacionChartComponent } from './checkins-habitacion-chart.component';

describe('CheckinsHabitacionChartComponent', () => {
  let component: CheckinsHabitacionChartComponent;
  let fixture: ComponentFixture<CheckinsHabitacionChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinsHabitacionChartComponent]
    });
    fixture = TestBed.createComponent(CheckinsHabitacionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
