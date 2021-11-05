import { CarroCard } from './carro-card';
import { CarroConforto } from './carro-conforto';
import { CarroDimensoes } from './carro-dimensoes';
import { CarroMecanica } from './carro-mecanica';
import { CarroSeguranca } from './carro-seguranca';

export interface Carro {
  id: number;
  nome: string;
  card: CarroCard;
  mecanica: CarroMecanica;
  dimensoes: CarroDimensoes;
  conforto: CarroConforto;
  seguranca: CarroSeguranca;
}
