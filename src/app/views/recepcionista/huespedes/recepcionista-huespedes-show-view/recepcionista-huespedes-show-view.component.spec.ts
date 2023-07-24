import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHuespedesShowViewComponent } from './recepcionista-huespedes-show-view.component';

describe('RecepcionistaHuespedesShowViewComponent', () => {
  let component: RecepcionistaHuespedesShowViewComponent;
  let fixture: ComponentFixture<RecepcionistaHuespedesShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHuespedesShowViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHuespedesShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
