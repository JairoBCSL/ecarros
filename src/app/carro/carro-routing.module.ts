import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAddFormComponent } from './carro-add-form/carro-add-form.component';

const routes: Routes = [{ path: '', component: CarroAddFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarroRoutingModule {}
