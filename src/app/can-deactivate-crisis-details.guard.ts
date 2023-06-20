import { Observable } from 'rxjs';
import {
  CanDeactivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { CrisisDetailsComponent } from './crisis/crisis-details/crisis-details.component';

export const canDeactivateGuard: CanDeactivateFn<CrisisDetailsComponent> = (
  component: CrisisDetailsComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  // Get the Crisis Center ID
  console.log(route.paramMap.get('id'));

  // Get the current URL
  console.log(state.url);

  // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  if (!component.crisis || component.crisis.name === component.editName) {
    return true;
  }
  // Otherwise ask the user with the dialog service and return its
  // observable which resolves to true or false when the user decides
  return component.dialog.confirm('Discard changes?');
};
