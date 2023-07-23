import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaCheckoutsViewComponent } from './recepcionista-checkouts-view.component';

describe('RecepcionistaCheckoutsViewComponent', () => {
  let component: RecepcionistaCheckoutsViewComponent;
  let fixture: ComponentFixture<RecepcionistaCheckoutsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaCheckoutsViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaCheckoutsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
