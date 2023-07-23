import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHuespedesViewComponent } from './recepcionista-huespedes-view.component';

describe('RecepcionistaHuespedesViewComponent', () => {
  let component: RecepcionistaHuespedesViewComponent;
  let fixture: ComponentFixture<RecepcionistaHuespedesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHuespedesViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHuespedesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
