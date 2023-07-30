import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSemanalesChartComponent } from './ventas-semanales-chart.component';

describe('VentasSemanalesChartComponent', () => {
  let component: VentasSemanalesChartComponent;
  let fixture: ComponentFixture<VentasSemanalesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasSemanalesChartComponent]
    });
    fixture = TestBed.createComponent(VentasSemanalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
