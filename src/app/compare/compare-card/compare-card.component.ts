import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.css']
})
export class CompareCardComponent implements OnInit {

  marca: string = '';
  modelo: string = '';
  ano: number = 1900;
  precoMin: number = 0;
  precoMax: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
