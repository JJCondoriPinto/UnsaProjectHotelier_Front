import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaAcompanantesCreateViewComponent } from './recepcionista-acompanantes-create-view.component';

describe('RecepcionistaAcompanantesCreateViewComponent', () => {
  let component: RecepcionistaAcompanantesCreateViewComponent;
  let fixture: ComponentFixture<RecepcionistaAcompanantesCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaAcompanantesCreateViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaAcompanantesCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
