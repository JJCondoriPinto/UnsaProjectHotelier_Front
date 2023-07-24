import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsHeaderTableComponent } from './actions-header-table.component';

describe('ActionsHeaderTableComponent', () => {
  let component: ActionsHeaderTableComponent;
  let fixture: ComponentFixture<ActionsHeaderTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsHeaderTableComponent]
    });
    fixture = TestBed.createComponent(ActionsHeaderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
