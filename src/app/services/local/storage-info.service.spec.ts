import { TestBed } from '@angular/core/testing';

import { StorageInfoService } from './storage-info.service';

describe('StorageInfoService', () => {
  let service: StorageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
