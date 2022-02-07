import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroEditFormComponent } from './carro-edit-form/carro-edit-form.component';
import { CarroEditComponent } from './carro-edit/carro-edit.component';

const carroRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CarroEditComponent },
      { path: ':idTo', component: CarroEditFormComponent },
      { path: ':idTo/:idFrom', component: CarroEditFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(carroRoutes)],
  exports: [RouterModule],
})
export class CarroRoutingModule {}
