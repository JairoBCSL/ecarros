import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampareComponent } from './campare/campare.component';
import { CompareRoutingModule } from './campare/compare-routing.module';
import { CompareCardComponent } from './compare-card/compare-card.component';


@NgModule({
  declarations: [
    CampareComponent,
    CompareCardComponent,
  ],
  imports: [
    CommonModule,
    CompareRoutingModule
  ]
})
export class CompareModule { }
