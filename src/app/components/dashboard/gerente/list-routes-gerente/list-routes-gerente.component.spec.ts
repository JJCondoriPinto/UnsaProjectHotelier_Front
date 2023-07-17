import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoutesGerenteComponent } from './list-routes-gerente.component';

describe('ListRoutesGerenteComponent', () => {
  let component: ListRoutesGerenteComponent;
  let fixture: ComponentFixture<ListRoutesGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRoutesGerenteComponent]
    });
    fixture = TestBed.createComponent(ListRoutesGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
