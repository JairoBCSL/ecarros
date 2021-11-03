import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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

  saveCarro(form: FormGroup){
    console.log(form);
    let record = form.value;
    record['nome'] = form.get('card.marca')?.value+' '+form.get('card.modelo')?.value+
      ' '+form.get('card.versao')?.value+' '+form.get('card.ano')?.value
    console.log(record);
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }
}
