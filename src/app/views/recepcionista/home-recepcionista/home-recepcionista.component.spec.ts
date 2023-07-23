import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecepcionistaComponent } from './home-recepcionista.component';

describe('HomeRecepcionistaComponent', () => {
  let component: HomeRecepcionistaComponent;
  let fixture: ComponentFixture<HomeRecepcionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRecepcionistaComponent]
    });
    fixture = TestBed.createComponent(HomeRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
