import { Component, Input, OnInit } from '@angular/core';
import { CarroDimensoes } from '../models/carro-dimensoes';

@Component({
  selector: 'app-compare-dimensoes',
  templateUrl: './compare-dimensoes.component.html',
  styleUrls: ['./compare-dimensoes.component.css'],
})
export class CompareDimensoesComponent implements OnInit {
  @Input() dimensoes: CarroDimensoes[];
  @Input() nomes: string[];

  constructor() {}

  ngOnInit(): void {}
}
