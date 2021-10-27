import { CarroCard } from './carro-card';
import { CarroDimensoes } from './carro-dimensoes';
import { CarroMecanica } from './carro-mecanica';

export interface Carro {
  card: CarroCard;
  mecanica: CarroMecanica;
  dimensoes: CarroDimensoes;
}
