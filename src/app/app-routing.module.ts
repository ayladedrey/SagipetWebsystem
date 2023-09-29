import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdoptPageModule } from './petspage/adopt/adopt.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'petspage',
    loadChildren: () => import('./petspage/petspage.module').then( m => m.PetspagePageModule)
  },
  {
    path: 'petspage',
    loadChildren: () => import('./petspage/petspage.module').then( m => m.PetspagePageModule)
  },
  {
    path: 'adopt',
    loadChildren: () => import('./petspage/adopt/adopt.module').then (m => m.AdoptPageModule)
  },
  {
  path: 'favorite',
  loadChildren: () => import('./petspage/favorite/favorite.module').then (m => m.FavoritePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
