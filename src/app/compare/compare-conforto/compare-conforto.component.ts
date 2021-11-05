import { Component, Input, OnInit } from '@angular/core';
import { CarroConforto } from '../models/carro-conforto';

@Component({
  selector: 'app-compare-conforto',
  templateUrl: './compare-conforto.component.html',
  styleUrls: ['./compare-conforto.component.css'],
})
export class CompareConfortoComponent implements OnInit {
  @Input() confortos: CarroConforto[] = [];
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
