import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedesNacionalidadChartComponent } from './huespedes-nacionalidad-chart.component';

describe('HuespedesNacionalidadChartComponent', () => {
  let component: HuespedesNacionalidadChartComponent;
  let fixture: ComponentFixture<HuespedesNacionalidadChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuespedesNacionalidadChartComponent]
    });
    fixture = TestBed.createComponent(HuespedesNacionalidadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
