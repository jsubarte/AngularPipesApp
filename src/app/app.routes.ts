import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/BasicPage/BasicPage')
  },
  {
    path: 'numbers',
    title: 'Number Pipes',
    loadComponent: () => import('./pages/NumberPage/NumberPage')
  },
  {
    path: 'uncommon',
    title: 'Pipes no comunes',
    loadComponent: () => import('./pages/UncommonPage/UncommonPage')
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/CustomPage/CustomPage')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }

];
