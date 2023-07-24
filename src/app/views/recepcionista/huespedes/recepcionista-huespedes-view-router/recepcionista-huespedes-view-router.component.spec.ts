import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaHuespedesViewRouterComponent } from './recepcionista-huespedes-view-router.component';

describe('RecepcionistaHuespedesViewRouterComponent', () => {
  let component: RecepcionistaHuespedesViewRouterComponent;
  let fixture: ComponentFixture<RecepcionistaHuespedesViewRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaHuespedesViewRouterComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaHuespedesViewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
