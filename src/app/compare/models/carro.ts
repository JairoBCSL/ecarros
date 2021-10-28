import { CarroCard } from './carro-card';
import { CarroDimensoes } from './carro-dimensoes';
import { CarroMecanica } from './carro-mecanica';

export interface Carro {
  nome: string;
  card: CarroCard;
  mecanica: CarroMecanica;
  dimensoes: CarroDimensoes;
}
