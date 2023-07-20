import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteRecepcionistasViewComponent } from './gerente-recepcionistas-view.component';

describe('GerenteRecepcionistasViewComponent', () => {
  let component: GerenteRecepcionistasViewComponent;
  let fixture: ComponentFixture<GerenteRecepcionistasViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteRecepcionistasViewComponent]
    });
    fixture = TestBed.createComponent(GerenteRecepcionistasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
