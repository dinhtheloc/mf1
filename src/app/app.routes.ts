import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'mf1',
    pathMatch: 'full'
  },
  {
    path: 'mf1',
    loadChildren: () => import('./mf1/mf1.module').then(m => m.Mf1Module),
  }
];
