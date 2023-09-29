import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetspagePage } from './petspage.page';

const routes: Routes = [
  {
    path: '',
    component: PetspagePage
  },
  {
    path: 'adopt',
    loadChildren: () => import('./adopt/adopt.module').then( m => m.AdoptPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetspagePageRoutingModule {}
