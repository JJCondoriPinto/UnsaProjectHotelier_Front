import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinIconComponent } from './checkin-icon.component';

describe('CheckinIconComponent', () => {
  let component: CheckinIconComponent;
  let fixture: ComponentFixture<CheckinIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinIconComponent]
    });
    fixture = TestBed.createComponent(CheckinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
