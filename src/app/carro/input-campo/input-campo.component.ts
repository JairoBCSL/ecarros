import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-campo',
  templateUrl: './input-campo.component.html',
  styleUrls: ['./input-campo.component.css'],
})
export class InputCampoComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() name: string = 'nome';
  @Input() label: string = 'Nome';
  @Input() field: FormControl;

  constructor() {}

  ngOnInit(): void {}

  aplicaClasses() {
    return {
      'is-invalid': this.verificaInvalidTouched(),
      'is-valid': this.verificaValidTouched(),
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
