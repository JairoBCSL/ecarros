import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroAddFormComponent } from './carro-add-form/carro-add-form.component';
import { CarroRoutingModule } from './carro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCampoComponent } from './input-campo/input-campo.component';

@NgModule({
  declarations: [CarroAddFormComponent, InputCampoComponent],
  imports: [CommonModule, CarroRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CarroModule {}
