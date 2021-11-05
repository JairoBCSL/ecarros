import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-campo',
  templateUrl: './checkbox-campo.component.html',
  styleUrls: ['./checkbox-campo.component.css'],
})
export class CheckboxCampoComponent implements OnInit {
  @Input() name: string = 'nome';
  @Input() label: string = 'Nome';
  @Input() field: FormControl;
  valor: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  mudou() {
    this.valor = !this.valor;
    console.log(this.valor);
  }

  aplicaClasses() {
    return {
      //'is-invalid': this.verificaInvalidTouched(),
      //'is-valid': this.verificaValidTouched(),
    };
  }

  verificaValidTouched() {
    if (this.field.valid && this.field.touched) return true;
    return false;
  }

  verificaInvalidTouched() {
    if (this.field.invalid && this.field.touched) return true;
    return false;
  }
}
