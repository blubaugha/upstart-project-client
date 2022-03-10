import { TestBed } from '@angular/core/testing';

import { AbstractBaseService } from './abstract-base.service';

describe('AbstractBaseService', () => {
  let service: AbstractBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
