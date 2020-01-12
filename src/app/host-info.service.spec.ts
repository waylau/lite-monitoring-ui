import { TestBed } from '@angular/core/testing';

import { HostInfoService } from './host-info.service';

describe('HostInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostInfoService = TestBed.get(HostInfoService);
    expect(service).toBeTruthy();
  });
});
