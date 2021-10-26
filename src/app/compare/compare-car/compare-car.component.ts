import { Component, Input, OnInit } from '@angular/core';
import { Carro } from '../models/carro';

@Component({
  selector: 'app-compare-car',
  templateUrl: './compare-car.component.html',
  styleUrls: ['./compare-car.component.css'],
})
export class CompareCarComponent implements OnInit {
  @Input() carro: Carro;

  constructor() {}

  ngOnInit(): void {}
}
