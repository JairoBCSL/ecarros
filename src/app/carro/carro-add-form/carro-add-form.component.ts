import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarrosService } from 'src/app/shared/carros.service';

@Component({
  selector: 'app-carro-add-form',
  templateUrl: './carro-add-form.component.html',
  styleUrls: ['./carro-add-form.component.css'],
})
export class CarroAddFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private carroSevice: CarrosService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      card: this.formBuilder.group({
        marca: ["Mitsubishi", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        modelo: ["Lancer", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        versao: ["Evolution X", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        ano: ["2022", [Validators.required, Validators.pattern('[0-9]*')]],
        precoMin: ["240000", [Validators.required, Validators.pattern('[0-9]*')]],
        precoMax: ["240000", [Validators.required, Validators.pattern('[0-9]*')]],
      }),
      mecanica: this.formBuilder.group({
        motorizacao: ['2.0', [Validators.required, Validators.pattern('[0-9]*.[0-9]')]],
        combustivel: [["Gasolina"], Validators.required],
        potencia: [[300], [Validators.required, Validators.pattern('[0-9]*')]],
        potenciaRpm: [[5600], [Validators.required, Validators.pattern('[0-9]*')]],
        torque: [[37.3], [Validators.required, Validators.pattern('[0-9]*.[0-9]')]],
        torqueRpm: [[4400], [Validators.required, Validators.pattern('[0-9]*')]],
        velocidadeMax: [[242], [Validators.required, Validators.pattern('[0-9]*')]],
        tempo0a100: [[6.3], [Validators.required, Validators.pattern('[0-9]*.[0-9]')]],
        consumoCidade: [[4.7], [Validators.required, Validators.pattern('[0-9]*.[0-9]')]],
        consumoEstrada: [[7.9], [Validators.required, Validators.pattern('[0-9]*.[0-9]')]],
        transmissao: ['dupla embreagem man.sequ.com modo auto de 6 marchas', Validators.required],
        tracao: ['4x4', Validators.required],
        direcao: ['hidráulica', Validators.required],
      }),
      dimensoes: this.formBuilder.group({
        altura: [1410, [Validators.required, Validators.pattern('[0-9]*')]],
        largura: [1810, [Validators.required, Validators.pattern('[0-9]*')]],
        comprimento: [4505, [Validators.required, Validators.pattern('[0-9]*')]],
        peso: [1590, [Validators.required, Validators.pattern('[0-9]*')]],
        tanque: [55, [Validators.required, Validators.pattern('[0-9]*')]],
        entreeixos: [2650, [Validators.required, Validators.pattern('[0-9]*')]],
        portamalas: [323, [Validators.required, Validators.pattern('[0-9]*')]],
        ocupantes: [5, [Validators.required, Validators.pattern('[0-9]*')]],
      }),
    });
  }

  onSubmit() {
    this.carroSevice.saveCarro(this.form);
  }

  aplicaClasses(campo: string) {
    return {
      'is-invalid': this.verificaInvalidTouched(campo),
      'is-valid': this.verificaValidTouched(campo),
    };
  }

  verificaValidTouched(campo: string) {
    if (this.form?.get(campo)?.valid && this.form?.get(campo)?.touched)
      return true;
    return false;
  }

  verificaInvalidTouched(campo: string) {
    if (this.form?.get(campo)?.invalid)
      console.log('Campo ' + campo + ' está ' + this.form?.get(campo)?.status);
    if (this.form?.get(campo)?.invalid && this.form?.get(campo)?.touched)
      return true;
    return false;
  }

  getControl(campo: string) {
    return this.form.get(campo) as FormControl;
  }

  trySubmit(){
    if(this.form.valid){
      this.onSubmit();
    }
  }

}