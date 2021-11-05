import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampareComponent } from './campare/campare.component';
import { CompareRoutingModule } from './campare/compare-routing.module';
import { CompareCardComponent } from './compare-card/compare-card.component';
import { CompareMecanicaComponent } from './compare-mecanica/compare-mecanica.component';
import { CompareDimensoesComponent } from './compare-dimensoes/compare-dimensoes.component';
import { CompareSegurancaComponent } from './compare-seguranca/compare-seguranca.component';
import { CompareConfortoComponent } from './compare-conforto/compare-conforto.component';

@NgModule({
  declarations: [
    CampareComponent,
    CompareCardComponent,
    CompareMecanicaComponent,
    CompareDimensoesComponent,
    CompareSegurancaComponent,
    CompareConfortoComponent,
  ],
  imports: [CommonModule, CompareRoutingModule],
})
export class CompareModule {}
