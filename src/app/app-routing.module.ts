import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'setup',
    loadChildren: () => import('./page/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: '',
    redirectTo: 'setup',
    pathMatch: 'full'
  },
  {
    path: 'match',
    loadChildren: () => import('./page/match/match.module').then( m => m.MatchPageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./page/stats/stats.module').then( m => m.StatsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
