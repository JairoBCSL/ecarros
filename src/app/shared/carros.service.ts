import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Carro } from '../compare/models/carro';
import { CrudService } from './crud.service';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CarrosService extends CrudService<Carro> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}carros`);
  }

  listMarcas() {
    this.list().pipe(tap(console.log)).subscribe();
  }

  listModelos(id: number) {}

  listVersoes(id: number) {}

  listAnos(id: number) {}

  saveCarro(form: FormGroup) {
    console.log('Form ', form);
    let record = form.value;

    record['nome'] = // Criando nome
      form.get('card.marca')?.value +
      ' ' +
      form.get('card.modelo')?.value +
      ' ' +
      form.get('card.versao')?.value +
      ' ' +
      form.get('card.ano')?.value;
    // Adicionando intens de conforto
    /*record = Object.assign(record, {
      conforto: record.conforto
        .map((v: string, i: number) => (v ? this.confortos[i] : null))
        .filter((v: string) => v !== null),
    });
    // Adicionando itens de segurança
    record = Object.assign(record, {
      seguranca: record.seguranca
        .map((v: string, i: number) => (v ? this.seguranca[i] : null))
        .filter((v: string) => v !== null),
    });*/
    console.log('Record ', record);

    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }
}
