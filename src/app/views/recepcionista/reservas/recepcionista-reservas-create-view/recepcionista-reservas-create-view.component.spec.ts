import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaReservasCreateViewComponent } from './recepcionista-reservas-create-view.component';

describe('RecepcionistaReservasCreateViewComponent', () => {
  let component: RecepcionistaReservasCreateViewComponent;
  let fixture: ComponentFixture<RecepcionistaReservasCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaReservasCreateViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaReservasCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
