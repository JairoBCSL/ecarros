import { Component, Input, OnInit } from '@angular/core';
import { CarroSeguranca } from '../models/carro-seguranca';

@Component({
  selector: 'app-compare-seguranca',
  templateUrl: './compare-seguranca.component.html',
  styleUrls: ['./compare-seguranca.component.css'],
})
export class CompareSegurancaComponent implements OnInit {
  @Input() segurancas: CarroSeguranca[] = [];
  @Input() nomes: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  aplicaClasses(valor: boolean) {
    return {
      'fa-check-circle verde': valor,
      'fa-times-circle': !valor,
    };
  }
}
