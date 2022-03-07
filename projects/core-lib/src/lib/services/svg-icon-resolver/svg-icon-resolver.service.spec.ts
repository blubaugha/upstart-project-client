import { TestBed } from '@angular/core/testing';
import { SvgIconResolverService } from './svg-icon-resolver.service';

describe('SvgIconResolverService', () => {
  let service: SvgIconResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgIconResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
