import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CampareComponent } from './campare/campare.component';
import { CompareRoutingModule } from './campare/compare-routing.module';
import { CompareCardComponent } from './compare-card/compare-card.component';
import { CompareMecanicaComponent } from './compare-mecanica/compare-mecanica.component';
import { CompareDimensoesComponent } from './compare-dimensoes/compare-dimensoes.component';
import { CompareSegurancaComponent } from './compare-seguranca/compare-seguranca.component';
import { CompareConfortoComponent } from './compare-conforto/compare-conforto.component';
import { AddCompareComponent } from './add-compare/add-compare.component';

@NgModule({
  declarations: [
    CampareComponent,
    CompareCardComponent,
    CompareMecanicaComponent,
    CompareDimensoesComponent,
    CompareSegurancaComponent,
    CompareConfortoComponent,
    AddCompareComponent,
  ],
  imports: [
    CommonModule,
    CompareRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CompareModule {}
