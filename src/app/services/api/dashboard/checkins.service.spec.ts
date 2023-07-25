import { TestBed } from '@angular/core/testing';

import { CheckinsService } from './checkins.service';

describe('CheckinsService', () => {
  let service: CheckinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
