import { TestBed } from '@angular/core/testing';

import { UserFeaturesService } from './user-features.service';

describe('UserFeaturesService', () => {
  let service: UserFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
