import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Carro } from '../models/carro';

@Component({
  selector: 'app-compare-car',
  templateUrl: './compare-car.component.html',
  styleUrls: ['./compare-car.component.css'],
})
export class CompareCarComponent implements OnInit {
  @Input() carro: Carro;
  nome: string;

  constructor() {}

  ngOnInit(): void {
    this.nome =
      this.carro.card.marca +
      ' ' +
      this.carro.card.modelo +
      ' ' +
      this.carro.card.versao +
      ' ' +
      this.carro.card.ano;
  }
}
