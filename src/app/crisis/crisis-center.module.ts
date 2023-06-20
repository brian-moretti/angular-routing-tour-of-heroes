import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailsComponent,
  ],
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
})
export class CrisisCenterModule {}
