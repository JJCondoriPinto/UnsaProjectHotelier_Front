import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoutesRecepcionistaComponent } from './list-routes-recepcionista.component';

describe('ListRoutesRecepcionistaComponent', () => {
  let component: ListRoutesRecepcionistaComponent;
  let fixture: ComponentFixture<ListRoutesRecepcionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRoutesRecepcionistaComponent]
    });
    fixture = TestBed.createComponent(ListRoutesRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
