import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistaCheckinsViewComponent } from './recepcionista-checkins-view.component';

describe('RecepcionistaCheckinsViewComponent', () => {
  let component: RecepcionistaCheckinsViewComponent;
  let fixture: ComponentFixture<RecepcionistaCheckinsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionistaCheckinsViewComponent]
    });
    fixture = TestBed.createComponent(RecepcionistaCheckinsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
