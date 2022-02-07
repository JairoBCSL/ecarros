import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  distinct,
  filter,
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';

import { Carro } from '../compare/models/carro';
import { CrudService } from './crud.service';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrosService extends CrudService<Carro> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}carros`);
  }

  getCarroById(id: number) {
    this.loadById(id).pipe(tap(console.log)).subscribe();
  }

  getCarroByNome(nome: string) {
    //this.loadById(nome).pipe(tap(console.log)).subscribe();
  }

  listCampo(campo: string): Observable<any> {
    return this.http.get<any>(`${environment.API}carros`).pipe(
      //tap(console.log),
      switchMap((dados) => dados),
      //tap(console.log),
      pluck('card', campo),
      //tap(console.log),
      distinct((dados) => dados),
      //tap(console.log),
      toArray(),
      tap(console.log)
    );
  }

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

    console.log('Record ', record);

    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }
}
