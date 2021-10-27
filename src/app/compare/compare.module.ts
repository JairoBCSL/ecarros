import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampareComponent } from './campare/campare.component';
import { CompareRoutingModule } from './campare/compare-routing.module';
import { CompareCardComponent } from './compare-card/compare-card.component';
import { CompareMecanicaComponent } from './compare-mecanica/compare-mecanica.component';
import { CompareCarComponent } from './compare-car/compare-car.component';
import { CompareDimensoesComponent } from './compare-dimensoes/compare-dimensoes.component';

@NgModule({
  declarations: [
    CampareComponent,
    CompareCardComponent,
    CompareMecanicaComponent,
    CompareCarComponent,
    CompareDimensoesComponent,
  ],
  imports: [CommonModule, CompareRoutingModule],
})
export class CompareModule {}
