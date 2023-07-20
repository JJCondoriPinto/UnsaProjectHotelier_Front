import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteReportesViewComponent } from './gerente-reportes-view.component';

describe('GerenteReportesViewComponent', () => {
  let component: GerenteReportesViewComponent;
  let fixture: ComponentFixture<GerenteReportesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteReportesViewComponent]
    });
    fixture = TestBed.createComponent(GerenteReportesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
