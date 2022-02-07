import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarrosService } from 'src/app/shared/carros.service';

@Component({
  selector: 'app-input-campo',
  templateUrl: './input-campo.component.html',
  styleUrls: ['./input-campo.component.css'],
})
export class InputCampoComponent implements OnInit {
  @Input() name: string = 'nome';
  @Input() label: string = 'Nome';
  @Input() field: FormControl;
  lista: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  aplicaClasses() {
    return {
      'is-invalid': this.verificaInvalidTouched(),
      'is-valid': this.verificaValidTouched(),
    };
  }

  verificaValidTouched() {
    // console.log(
    //   this.name + ' do tipo ' + this.type + ' tem valor: ' + this.field.value
    // );
    if (this.field.valid && this.field.touched) return true;
    return false;
  }

  verificaInvalidTouched() {
    if (this.field.invalid && this.field.touched) return true;
    return false;
  }
}
