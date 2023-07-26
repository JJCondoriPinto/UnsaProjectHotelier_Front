import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutIconComponent } from './checkout-icon.component';

describe('CheckoutIconComponent', () => {
  let component: CheckoutIconComponent;
  let fixture: ComponentFixture<CheckoutIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutIconComponent]
    });
    fixture = TestBed.createComponent(CheckoutIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
