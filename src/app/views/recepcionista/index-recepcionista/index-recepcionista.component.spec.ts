import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRecepcionistaComponent } from './index-recepcionista.component';

describe('IndexRecepcionistaComponent', () => {
  let component: IndexRecepcionistaComponent;
  let fixture: ComponentFixture<IndexRecepcionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexRecepcionistaComponent]
    });
    fixture = TestBed.createComponent(IndexRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
