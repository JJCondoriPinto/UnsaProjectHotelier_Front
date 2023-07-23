import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteRecepcionistasViewRouterComponent } from './gerente-recepcionistas-view-router.component';

describe('GerenteRecepcionistasViewRouterComponent', () => {
  let component: GerenteRecepcionistasViewRouterComponent;
  let fixture: ComponentFixture<GerenteRecepcionistasViewRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteRecepcionistasViewRouterComponent]
    });
    fixture = TestBed.createComponent(GerenteRecepcionistasViewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
