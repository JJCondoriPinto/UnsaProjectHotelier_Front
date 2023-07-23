import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteRecepcionistasShowViewComponent } from './gerente-recepcionistas-show-view.component';

describe('GerenteRecepcionistasShowViewComponent', () => {
  let component: GerenteRecepcionistasShowViewComponent;
  let fixture: ComponentFixture<GerenteRecepcionistasShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteRecepcionistasShowViewComponent]
    });
    fixture = TestBed.createComponent(GerenteRecepcionistasShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
