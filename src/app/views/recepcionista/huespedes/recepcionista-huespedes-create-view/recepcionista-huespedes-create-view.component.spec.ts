import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHuespedesCreateViewComponent } from './recepcionista-huespedes-create-view.component';

describe('RecepcionistaHuespedesCreateViewComponent', () => {
  let component: RecepcionistaHuespedesCreateViewComponent;
  let fixture: ComponentFixture<RecepcionistaHuespedesCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHuespedesCreateViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHuespedesCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
