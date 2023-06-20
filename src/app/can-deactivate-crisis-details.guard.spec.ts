import { TestBed } from '@angular/core/testing';
import { CanDeactivateCrisisDetailsGuard } from './can-deactivate-crisis-details.guard';

describe('CanDeactivateCrisisDetailsGuard', () => {
  let guard: CanDeactivateCrisisDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateCrisisDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
