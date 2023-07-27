import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaCheckinsViewRouterComponent } from './recepcionista-checkins-view-router.component';

describe('RecepcionistaCheckinsViewRouterComponent', () => {
  let component: RecepcionistaCheckinsViewRouterComponent;
  let fixture: ComponentFixture<RecepcionistaCheckinsViewRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaCheckinsViewRouterComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaCheckinsViewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
