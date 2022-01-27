import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroRoutingModule } from './carro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCampoComponent } from './input-campo/input-campo.component';
import { CheckboxCampoComponent } from './checkbox-campo/checkbox-campo.component';
import { CarroEditFormComponent } from './carro-edit-form/carro-edit-form.component';
import { CarroEditComponent } from './carro-edit/carro-edit.component';

@NgModule({
  declarations: [
    InputCampoComponent,
    CheckboxCampoComponent,
    CarroEditFormComponent,
    CarroEditComponent,
  ],
  imports: [CommonModule, CarroRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CarroModule {}
