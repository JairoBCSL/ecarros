import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroEditComponent } from './carro/carro-edit/carro-edit.component';

@NgModule({
  declarations: [AppComponent, CarroEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
