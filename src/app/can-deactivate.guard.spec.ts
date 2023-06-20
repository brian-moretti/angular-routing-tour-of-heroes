import { TestBed } from '@angular/core/testing';

import { canDeactivateGuard } from './can-deactivate.guard';

describe('canDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(canDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
