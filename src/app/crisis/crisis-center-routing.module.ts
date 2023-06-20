import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { canDeactivateGuard } from '../can-deactivate.guard';
import { crisisDetailResolver } from './crisis-details-resolver.resolver';

const routes: Routes = [
  {
    path: '', //! STEP 5 ERA 'crisis-center'
    component: CrisisCenterComponent,
    children: [
      {
        path: '', //! corrisponde al parent e quindi mostrato nel router-outlet
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailsComponent,
            canDeactivate: [canDeactivateGuard],
            resolve: { crisis: crisisDetailResolver },
          },
          { path: '', component: CrisisCenterHomeComponent }, //! visualizzato solo quando la list è visualizzata...path "" === stesso url
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
