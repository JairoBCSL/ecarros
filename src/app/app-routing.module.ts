import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'compare' },
  {
    path: 'compare',
    loadChildren: () =>
      import('./compare/compare.module').then((m) => m.CompareModule),
  },
  {
    path: 'carro',
    loadChildren: () =>
      import('./carro/carro.module').then((m) => m.CarroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
