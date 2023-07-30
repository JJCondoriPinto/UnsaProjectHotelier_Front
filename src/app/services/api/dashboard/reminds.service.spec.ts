import { TestBed } from '@angular/core/testing';

import { RemindsService } from './reminds.service';

describe('RemindsService', () => {
  let service: RemindsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemindsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
