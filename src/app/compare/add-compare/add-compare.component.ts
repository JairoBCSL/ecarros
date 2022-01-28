import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CarrosService } from 'src/app/shared/carros.service';
import { Carro } from '../models/carro';

@Component({
  selector: 'app-add-compare',
  templateUrl: './add-compare.component.html',
  styleUrls: ['./add-compare.component.css'],
})
export class AddCompareComponent implements OnInit {
  marcas: string[] = [];
  marca: string = '0';
  modelos: string[] = [];
  modelo: string = '0';
  versoes: string[] = [];
  versao: string = '0';
  anos: number[] = [];
  ano: number = 0;
  id: number;
  @Output() mudouValor = new EventEmitter();

  sub$: Subscription;

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    this.onListMarcas();
  }

  onListMarcas() {
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        this.marcas = [];
        this.modelos = [];
        this.modelo = '0';
        this.anos = [];
        this.ano = 0;
        this.versoes = [];
        this.versao = '0';
        dados.forEach((dado) => {
          if (this.marcas.indexOf(dado.card.marca) == -1)
            this.marcas.push(dado.card.marca);
        });
      });
  }

  onListModelos() {
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        this.modelos = [];
        this.modelo = '0';
        this.anos = [];
        this.ano = 0;
        this.versoes = [];
        this.versao = '0';
        dados.forEach((dado) => {
          if (
            dado.card.marca == this.marca &&
            this.modelos.indexOf(dado.card.modelo) == -1
          )
            this.modelos.push(dado.card.modelo);
        });
      });
  }

  onListAnos() {
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        this.anos = [];
        this.ano = 0;
        this.versoes = [];
        this.versao = '0';
        dados.forEach((dado) => {
          if (
            dado.card.marca == this.marca &&
            dado.card.modelo == this.modelo &&
            this.anos.indexOf(dado.card.ano) == -1
          )
            this.anos.push(dado.card.ano);
        });
      });
  }

  onListVersoes() {
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        this.versoes = [];
        this.versao = '0';
        dados.forEach((dado) => {
          if (
            dado.card.marca == this.marca &&
            dado.card.modelo == this.modelo &&
            dado.card.ano == this.ano &&
            this.versoes.indexOf(dado.card.versao) == -1
          )
            this.versoes.push(dado.card.versao);
        });
      });
  }

  onGetId() {
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        dados.forEach((dado) => {
          if (
            dado.card.marca == this.marca &&
            dado.card.modelo == this.modelo &&
            dado.card.ano == this.ano &&
            dado.card.versao == this.versao
          )
            this.id = dado.id;
        });
      });
  }

  addCar() {
    if (this.id) this.mudouValor.emit({ id: this.id });
    this.marca = '0';
    this.modelo = '0';
    this.ano = 0;
    this.versao = '0';
    this.id = 0;
  }
}
