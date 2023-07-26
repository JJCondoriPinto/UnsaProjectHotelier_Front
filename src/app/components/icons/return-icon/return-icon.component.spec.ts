import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnIconComponent } from './return-icon.component';

describe('ReturnIconComponent', () => {
  let component: ReturnIconComponent;
  let fixture: ComponentFixture<ReturnIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnIconComponent]
    });
    fixture = TestBed.createComponent(ReturnIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
