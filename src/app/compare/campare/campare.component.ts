import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { CarrosService } from 'src/app/shared/carros.service';
import { Carro } from '../models/carro';
import { CarroCard } from '../models/carro-card';
import { CarroConforto } from '../models/carro-conforto';
import { CarroDimensoes } from '../models/carro-dimensoes';
import { CarroMecanica } from '../models/carro-mecanica';
import { CarroSeguranca } from '../models/carro-seguranca';

@Component({
  selector: 'app-campare',
  templateUrl: './campare.component.html',
  styleUrls: ['./campare.component.css'],
})
export class CampareComponent implements OnInit {
  carros: Carro[] = [];

  sub$: Subscription;

  cards: CarroCard[] = [];
  mecanicas: CarroMecanica[] = [];
  dimensoes: CarroDimensoes[] = [];
  confortos: CarroConforto[] = [];
  segurancas: CarroSeguranca[] = [];
  nomes: string[] = [];
  ids: number[] = [];
  constructor(private carroSevice: CarrosService) {}

  ngOnInit(): void {
    this.carroSevice.list().subscribe((dados) => {
      this.carros = dados;
      this.carros.forEach((carro: Carro) => {
        this.cards.push(carro.card);
        this.mecanicas.push(carro.mecanica);
        this.dimensoes.push(carro.dimensoes);
        this.confortos.push(carro.conforto);
        this.segurancas.push(carro.seguranca);
        this.nomes.push(carro.nome);
        this.ids.push(carro.id);
      });
    });
  }

  onList() {
    this.carroSevice.list().pipe(delay(1000), tap(console.log)).subscribe();
  }

  onRemove(a: HTMLInputElement) {
    console.log(a.value);
    this.carroSevice.remove(Number(a.value));
  }
}
