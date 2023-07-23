import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteRecepcionistasCreateViewComponent } from './gerente-recepcionistas-create-view.component';

describe('GerenteRecepcionistasCreateViewComponent', () => {
  let component: GerenteRecepcionistasCreateViewComponent;
  let fixture: ComponentFixture<GerenteRecepcionistasCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteRecepcionistasCreateViewComponent]
    });
    fixture = TestBed.createComponent(GerenteRecepcionistasCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
