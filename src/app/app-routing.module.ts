import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';
//import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { authGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  //{ path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('./crisis/crisis-center.module').then((m) => m.CrisisCenterModule),
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canMatch: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
