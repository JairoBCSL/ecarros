import { error } from '@angular/compiler/src/util';
import { Component, createPlatform, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Carro } from 'src/app/compare/models/carro';
import { CarrosService } from 'src/app/shared/carros.service';

@Component({
  selector: 'app-carro-edit-form',
  templateUrl: './carro-edit-form.component.html',
  styleUrls: ['./carro-edit-form.component.css'],
})
export class CarroEditFormComponent implements OnInit {
  form: FormGroup;
  combustiveis: any;
  teste: Carro;
  inscricao: Subscription;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private carroSevice: CarrosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.form = this.createForm();
    });

    if (this.id > 0)
      this.carroSevice.loadById(this.id).subscribe(
        (dados) => {
          this.teste = dados;
          this.form.setValue(dados);
        },
        (error) => {
          this.router.navigate(['carro/0']);
        }
      );
    //console.log(this.form);
  }

  /*buildConfortos() {
    const values = this.confortos.map((v) => new FormControl(v));
    return this.formBuilder.array(values);
  }

  buildSeguranca() {
    const values = this.segurancas.map((v) => new FormControl(v));
    return this.formBuilder.array(values);
  }*/

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

  getFormArray(campo: string) {
    return this.form.get(campo) as FormArray;
  }

  trySubmit() {
    if (this.form.valid) {
      this.onSubmit();
    } else {
      console.log('Preencha os campos obrigatórios');
    }
  }

  createForm() {
    return this.formBuilder.group({
      id: [],
      nome: [],
      card: this.formBuilder.group({
        marca: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        modelo: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        versao: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
        ano: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        precoMin: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        precoMax: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }),
      mecanica: this.formBuilder.group({
        motorizacao: [
          '',
          [Validators.required, Validators.pattern('[0-9]*.[0-9]')],
        ],
        combustivel: ['', [Validators.required]],
        potencia: [
          '',
          [Validators.required, Validators.pattern('[0-9]*[.]?[0-9]*')],
        ],
        potenciaRpm: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        torque: [
          '',
          [Validators.required, Validators.pattern('[0-9]*[.]?[0-9]*')],
        ],
        torqueRpm: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        velocidadeMax: [
          '',
          [Validators.required, Validators.pattern('[0-9]*')],
        ],
        tempo0a100: [
          '',
          [Validators.required, Validators.pattern('[0-9]*[.]?[0-9]*')],
        ],
        consumoCidade: [
          '',
          [Validators.required, Validators.pattern('[0-9]*[.]?[0-9]*')],
        ],
        consumoEstrada: [
          '',
          [Validators.required, Validators.pattern('[0-9]*[.]?[0-9]*')],
        ],
        transmissao: ['', Validators.required],
        tracao: ['', Validators.required],
        direcao: ['', Validators.required],
      }),
      dimensoes: this.formBuilder.group({
        altura: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        largura: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        comprimento: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        peso: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        tanque: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        entreeixos: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        portamalas: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        ocupantes: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }),
      conforto: this.formBuilder.group({
        arcondicionado: false,
        travasEletricas: false,
        arquente: false,
        pilotoAutomatico: false,
        regulagemAlturaVolante: false,
        trioEletrico: false,
        cdplayer: false,
        cdplayerMP3: false,
        usb: false,
        radioFmAm: false,
        kitMultimidia: false,
        bancosDeCouro: false,
        ajusteAlturaBanco: false,
        ajusteEletricoBanco: false,
        vidrosEletricosDianteiros: false,
        vidrosEletricosTraseiros: false,
        desembTraseiro: false,
        tetoSolar: false,
      }),
      seguranca: this.formBuilder.group({
        abs: false,
        airbagMotorista: false,
        airbagPassageiro: false,
        airbagLateral: false,
        controleDeTracao: false,
        ebd: false,
        alarme: false,
        computadorDeBordo: false,
        sensorDeFarol: false,
        farolDeNeblina: false,
      }),
    });
  }

  editForm() {
    return this.formBuilder.group({
      id: [],
      nome: [],
      card: this.formBuilder.group({
        marca: [''],
        modelo: [''],
        versao: [''],
        ano: [''],
        precoMin: [''],
        precoMax: [''],
      }),
      mecanica: this.formBuilder.group({
        motorizacao: [''],
        combustivel: [''],
        potencia: [''],
        potenciaRpm: [''],
        torque: [''],
        torqueRpm: [''],
        velocidadeMax: [''],
        tempo0a100: [''],
        consumoCidade: [''],
        consumoEstrada: [''],
        transmissao: [''],
        tracao: [''],
        direcao: ['', Validators.required],
      }),
      dimensoes: this.formBuilder.group({
        altura: [''],
        largura: [''],
        comprimento: [''],
        peso: [''],
        tanque: [''],
        entreeixos: [''],
        portamalas: [''],
        ocupantes: ['', [Validators.pattern('[0-9]*')]],
      }),
      conforto: this.formBuilder.group({
        arcondicionado: false,
        travasEletricas: false,
        arquente: false,
        pilotoAutomatico: false,
        regulagemAlturaVolante: false,
        trioEletrico: false,
        cdplayer: false,
        cdplayerMP3: false,
        usb: false,
        radioFmAm: false,
        kitMultimidia: false,
        bancosDeCouro: false,
        ajusteAlturaBanco: false,
        ajusteEletricoBanco: false,
        vidrosEletricosDianteiros: false,
        vidrosEletricosTraseiros: false,
        desembTraseiro: false,
        tetoSolar: false,
      }),
      seguranca: this.formBuilder.group({
        abs: false,
        airbagMotorista: false,
        airbagPassageiro: false,
        airbagLateral: false,
        controleDeTracao: false,
        ebd: false,
        alarme: false,
        computadorDeBordo: false,
        sensorDeFarol: false,
        farolDeNeblina: false,
      }),
    });
  }
}
