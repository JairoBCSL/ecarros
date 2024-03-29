import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CarrosService } from 'src/app/shared/carros.service';
import { Carro } from '../../compare/models/carro';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.css'],
})
export class CarroEditComponent implements OnInit {
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

  constructor(private carrosService: CarrosService, private router: Router) {}

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
        this.versoes = [];
        this.versao = '0';
        this.anos = [];
        this.ano = 0;
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
        this.versoes = [];
        this.versao = '0';
        this.anos = [];
        this.ano = 0;
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
            this.versao.indexOf(dado.card.versao) == -1
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
            dado.card.versao == this.versao &&
            dado.card.ano == this.ano
          )
            this.id = dado.id;
        });
      });
  }

  editCar() {
    this.router.navigate([`carro/${this.id}/${this.id}`]);
  }

  addCar() {
    this.router.navigate([`carro/0`]);
  }

  addAno() {
    // Fazer a consulta do primeiro resultado do modelo
    let ano = 0;
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        dados.forEach((dado) => {
          if (
            dado.card.marca == this.marca &&
            dado.card.modelo == this.modelo &&
            dado.card.ano > ano
          ) {
            ano = dado.card.ano;
            this.id = dado.id;
            this.router.navigate([`carro/0/${this.id}`]);
          }
        });
      });
  }

  addVersao() {
    // Fazer a consulta do primeiro resultado do modelo
    this.carrosService
      .list()
      .pipe(delay(100))
      .subscribe((dados: Carro[]) => {
        dados.forEach((dado) => {
          if (
            dado.card.marca == this.marca &&
            dado.card.modelo == this.modelo &&
            dado.card.ano == this.ano
          ) {
            this.id = dado.id;
            this.router.navigate([`carro/0/${this.id}`]);
          }
        });
      });
  }
}
