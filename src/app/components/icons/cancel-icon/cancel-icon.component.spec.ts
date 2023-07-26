import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelIconComponent } from './cancel-icon.component';

describe('CancelIconComponent', () => {
  let component: CancelIconComponent;
  let fixture: ComponentFixture<CancelIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelIconComponent]
    });
    fixture = TestBed.createComponent(CancelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
