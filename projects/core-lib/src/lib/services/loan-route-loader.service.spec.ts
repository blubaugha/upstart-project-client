import { TestBed } from '@angular/core/testing';

import { LoanRouteLoaderService } from './loan-route-loader.service';

describe('LoanRouteLoaderService', () => {
  let service: LoanRouteLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanRouteLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
