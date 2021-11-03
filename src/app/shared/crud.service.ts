import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

interface D {
  id: number;
}

export class CrudService<T> {
  constructor(protected http: HttpClient, private API_URL: string) {}

  list() {
    return this.http.get<T[]>(this.API_URL);
  }

  loadById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  create<T extends D>(record: T) {
    console.log('Adicionando');
    return this.http.post(this.API_URL, record).pipe(take(1)).subscribe();
  }

  update<T extends D>(record: T) {
    console.log('Atualizando');
    return this.http
      .put(`${this.API_URL}/${record.id}`, record)
      .pipe(take(1))
      .subscribe();
  }

  save<T extends D>(record: T) {
    console.log(record);
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1)).subscribe();
  }
}
