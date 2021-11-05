import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CarroCard } from '../models/carro-card';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.css'],
})
export class CompareCardComponent implements OnInit, OnDestroy {
  @Input() cards: CarroCard[];
  @Input() ids: number[];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
