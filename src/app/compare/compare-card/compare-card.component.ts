import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { CarroCard } from '../models/carro-card';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.css'],
})
export class CompareCardComponent implements OnInit, OnDestroy {
  @Input() cards: CarroCard[];
  @Input() ids: number[];
  @Output() remover = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  fechar(id: number) {
    //console.log('Removendo: ', id);
    this.remover.emit({ id: id });
  }
}
