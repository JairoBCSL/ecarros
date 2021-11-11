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

  onMudouValor(event: any) {
    this.loadCar(event.id);
  }

  onRemover(event: any) {
    let id = event.id;
    this.carros.splice(id, 1);
    this.cards.splice(id, 1);
    this.mecanicas.splice(id, 1);
    this.dimensoes.splice(id, 1);
    this.confortos.splice(id, 1);
    this.segurancas.splice(id, 1);
    this.nomes.splice(id, 1);
    this.ids.splice(id, 1);
  }

  ngOnInit(): void {
    this.loadCar(1);
    this.loadCar(2);
    //this.loadCar(3);
  }

  loadCar(id: number) {
    this.carroSevice.loadById(id).subscribe((dados) => {
      this.carros.push(dados);
      this.cards.push(dados.card);
      this.mecanicas.push(dados.mecanica);
      this.dimensoes.push(dados.dimensoes);
      this.confortos.push(dados.conforto);
      this.segurancas.push(dados.seguranca);
      this.nomes.push(dados.nome);
      this.ids.push(dados.id);
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
