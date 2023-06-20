import { TestBed } from '@angular/core/testing';

import { CrisisDetailsResolverResolver } from './crisis-details-resolver.resolver';

describe('CrisisDetailsResolverResolver', () => {
  let resolver: CrisisDetailsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CrisisDetailsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
