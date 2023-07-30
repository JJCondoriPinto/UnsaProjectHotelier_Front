import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindsComponent } from './reminds.component';

describe('RemindsComponent', () => {
  let component: RemindsComponent;
  let fixture: ComponentFixture<RemindsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemindsComponent]
    });
    fixture = TestBed.createComponent(RemindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
