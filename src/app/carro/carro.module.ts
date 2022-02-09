import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroRoutingModule } from './carro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCampoComponent } from './input-campo/input-campo.component';
import { CheckboxCampoComponent } from './checkbox-campo/checkbox-campo.component';
import { CarroEditFormComponent } from './carro-edit-form/carro-edit-form.component';
import { CarroEditComponent } from './carro-edit/carro-edit.component';
import { CarroEditInputComponent } from './carro-edit-input/carro-edit-input.component';
import { CarroEditCheckComponent } from './carro-edit-check/carro-edit-check.component';

@NgModule({
  declarations: [
    InputCampoComponent,
    CheckboxCampoComponent,
    CarroEditFormComponent,
    CarroEditComponent,
    CarroEditInputComponent,
    CarroEditCheckComponent,
  ],
  imports: [CommonModule, CarroRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CarroModule {}
