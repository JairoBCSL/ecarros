import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
}
