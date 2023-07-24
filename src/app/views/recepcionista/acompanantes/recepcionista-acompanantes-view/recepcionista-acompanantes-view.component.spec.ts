import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaAcompanantesViewComponent } from './recepcionista-acompanantes-view.component';

describe('RecepcionistaAcompanantesViewComponent', () => {
  let component: RecepcionistaAcompanantesViewComponent;
  let fixture: ComponentFixture<RecepcionistaAcompanantesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaAcompanantesViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaAcompanantesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
