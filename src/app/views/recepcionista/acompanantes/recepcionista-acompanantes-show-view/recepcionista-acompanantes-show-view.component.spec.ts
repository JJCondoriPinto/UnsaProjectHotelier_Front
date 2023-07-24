import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaAcompanantesShowViewComponent } from './recepcionista-acompanantes-show-view.component';

describe('RecepcionistaAcompanantesShowViewComponent', () => {
  let component: RecepcionistaAcompanantesShowViewComponent;
  let fixture: ComponentFixture<RecepcionistaAcompanantesShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaAcompanantesShowViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaAcompanantesShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
