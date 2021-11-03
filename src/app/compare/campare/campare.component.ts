import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { CarrosService } from 'src/app/shared/carros.service';
import { Carro } from '../models/carro';
import { CarroCard } from '../models/carro-card';
import { CarroDimensoes } from '../models/carro-dimensoes';
import { CarroMecanica } from '../models/carro-mecanica';

@Component({
  selector: 'app-campare',
  templateUrl: './campare.component.html',
  styleUrls: ['./campare.component.css'],
})
export class CampareComponent implements OnInit {
  carros: Carro[] = [];

  teste: Carro = {
    id: 4,
    nome: 'Toyoura Corolla XEi CVT 2022',
    card: {
      marca: 'Toyota',
      modelo: 'Corolla',
      versao: 'XEi CVT',
      ano: 2022,
      precoMin: 120000,
      precoMax: 160000,
    },
    mecanica: {
      motorizacao: 2.0,
      combustivel: ['Gasolina', 'Etanol'],
      potencia: [169, 177],
      potenciaRpm: [4400, 4400],
      torque: [21.4, 21.4],
      torqueRpm: [6600, 6600],
      velocidadeMax: [220, 220],
      tempo0a100: [8.5, 8.2],
      consumoCidade: [11.6, 8.0],
      consumoEstrada: [13.9, 9.7],
      transmissao: 'CVT - 10 Marchas',
      tracao: 'Traseira',
      direcao: 'Elétrica',
    },
    dimensoes: {
      altura: 1455,
      largura: 1780,
      comprimento: 4630,
      peso: 1405,
      tanque: 50,
      entreeixos: 2700,
      portamalas: 470,
      ocupantes: 5,
    },
  };

  sub$: Subscription;

  cards: CarroCard[] = [];
  mecanicas: CarroMecanica[] = [];
  dimensoes: CarroDimensoes[] = [];
  nomes: string[] = [];

  constructor(private carroSevice: CarrosService) {}

  ngOnInit(): void {
    this.carroSevice.list().subscribe((dados) => {
      this.carros = dados;
      this.carros.forEach((carro: Carro) => {
        this.cards.push(carro.card);
        this.mecanicas.push(carro.mecanica);
        this.dimensoes.push(carro.dimensoes);
        this.nomes.push(carro.nome);
      });
    });
  }

  onAdd() {
    this.carroSevice.save(this.teste);
  }

  onList() {
    this.carroSevice.list().pipe(delay(1000), tap(console.log)).subscribe();
  }

  onRemove(a: HTMLInputElement) {
    console.log(a.value);
    this.carroSevice.remove(Number(a.value));
  }
}
