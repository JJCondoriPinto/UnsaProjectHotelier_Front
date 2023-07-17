import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGerenteComponent } from './index-gerente.component';

describe('IndexGerenteComponent', () => {
  let component: IndexGerenteComponent;
  let fixture: ComponentFixture<IndexGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexGerenteComponent]
    });
    fixture = TestBed.createComponent(IndexGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
