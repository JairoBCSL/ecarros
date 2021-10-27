import { Component, OnInit } from '@angular/core';
import { Carro } from '../models/carro';

@Component({
  selector: 'app-campare',
  templateUrl: './campare.component.html',
  styleUrls: ['./campare.component.css'],
})
export class CampareComponent implements OnInit {
  carros: Carro[] = [
    {
      card: {
        id: '01',
        marca: 'Toyota asdfasdfasdfasdfasdfasdfasdf',
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
    },
    {
      card: {
        id: '02',
        marca: 'Honda',
        modelo: 'Civic',
        versao: '1.5 Turbo Touring CVT',
        ano: 2022,
        precoMin: 116000,
        precoMax: 156000,
      },
      mecanica: {
        motorizacao: 1.5,
        combustivel: ['Gasolina'],
        potencia: [173],
        potenciaRpm: [5500],
        torque: [22.3],
        torqueRpm: [5500],
        velocidadeMax: [220],
        tempo0a100: [7.5],
        consumoCidade: [11.8],
        consumoEstrada: [14.4],
        transmissao: 'CVT - 7 Marchas',
        tracao: 'Traseira',
        direcao: 'Elétrica',
      },
      dimensoes: {
        altura: 1433,
        largura: 1799,
        comprimento: 4641,
        peso: 1329,
        tanque: 56,
        entreeixos: 2700,
        portamalas: 517,
        ocupantes: 5,
      },
    },
    {
      card: {
        id: '03',
        marca: 'Chevrolet',
        modelo: 'Cruze',
        versao: 'LTZ 1.4 Ecotec (Aut)',
        ano: 2022,
        precoMin: 124590,
        precoMax: 149290,
      },
      mecanica: {
        motorizacao: 1.4,
        combustivel: ['Gasolina', 'Etanol'],
        potencia: [150, 153],
        potenciaRpm: [5600, 5200],
        torque: [24, 24.5],
        torqueRpm: [2100, 2000],
        velocidadeMax: [220, 220],
        tempo0a100: [9.0, 9.0],
        consumoCidade: [11.1, 7.6],
        consumoEstrada: [13.9, 9.4],
        transmissao: 'Automática com 6 marchas',
        tracao: 'Traseira',
        direcao: 'Elétrica',
      },
      dimensoes: {
        altura: 1484,
        largura: 1807,
        comprimento: 4665,
        peso: 1325,
        tanque: 52,
        entreeixos: 2700,
        portamalas: 440,
        ocupantes: 5,
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
