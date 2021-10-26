import { Component, Input, OnInit } from '@angular/core';
import { CarroMecanica } from '../models/carro-mecanica';

@Component({
  selector: 'app-compare-mecanica',
  templateUrl: './compare-mecanica.component.html',
  styleUrls: ['./compare-mecanica.component.css'],
})
export class CompareMecanicaComponent implements OnInit {
  @Input() mecanica: CarroMecanica;

  constructor() {}

  ngOnInit(): void {}
}
