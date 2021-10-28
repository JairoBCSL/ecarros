import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Carro } from '../compare/models/carro';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  private readonly API = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Carro[]>(`${this.API}carros`);
  }
}
