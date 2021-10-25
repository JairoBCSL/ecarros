import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampareComponent } from './campare.component';

const routes: Routes = [
  {path: '', component: CampareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
