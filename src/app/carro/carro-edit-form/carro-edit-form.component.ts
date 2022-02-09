import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, createPlatform, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  idFrom: number;
  idTo: number;
  queryField = new FormControl();
  SEARCH_URL = 'http://localhost:3000/carros';
  resultados$: Observable<any>;
  total: number;
  camposCard: any;
  camposMecanica: any;
  campos: any;

  constructor(
    private formBuilder: FormBuilder,
    private carroSevice: CarrosService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  onSearch() {
    console.log(this.queryField.value);
    this.resultados$ = this.http.get(this.SEARCH_URL).pipe(
      tap((res: any) => (this.total = res.total)),
      tap(console.log)
    );
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.idFrom = params['idFrom'];
      this.idTo = params['idTo'];
      //console.log('Id From: ' + this.idFrom);
      //console.log('Id To: ' + this.idTo);
      this.form = this.createForm();
    });

    if (this.idFrom > 0) {
      this.carroSevice.loadById(this.idFrom).subscribe(
        (dados) => {
          this.teste = dados;
          this.form.setValue(dados);
          this.form.value.id = this.idTo;
        },
        (error) => {
          this.router.navigate(['carro/0']);
        }
      );
    }
    this.campos = {
      card: [
        { campo: 'marca', label: 'Marca' },
        { campo: 'modelo', label: 'Modelo' },
        { campo: 'ano', label: 'Ano' },
        { campo: 'versao', label: 'Versão' },
        { campo: 'precoMin', label: 'Preço Mínimo' },
        { campo: 'precoMax', label: 'Preço Máximo' },
      ],
      mecanica: [
        { campo: 'motorizacao', label: 'Motorização' },
        { campo: 'combustivel', label: 'Combustivel' },
        { campo: 'potencia', label: 'Potência' },
        { campo: 'potenciaRpm', label: 'RPM da potência' },
        { campo: 'torque', label: 'Torque' },
        { campo: 'torqueRpm', label: 'RPM do torque' },
        { campo: 'velocidadeMax', label: 'Velocidade máxima' },
        { campo: 'tempo0a100', label: 'Tempo 0-100' },
        { campo: 'consumoCidade', label: 'Consumo na cidade' },
        { campo: 'consumoEstrada', label: 'Consumo na estrada' },
        { campo: 'transmissao', label: 'Transmissão' },
        { campo: 'tracao', label: 'Tração' },
        { campo: 'direcao', label: 'Direção' },
      ],
      dimensoes: [
        { campo: 'altura', label: 'Altura' },
        { campo: 'largura', label: 'Largura' },
        { campo: 'comprimento', label: 'Comprimento' },
        { campo: 'peso', label: 'Peso' },
        { campo: 'tanque', label: 'Tanque' },
        { campo: 'entreeixos', label: 'Entreeixos' },
        { campo: 'portamalas', label: 'Porta Malas' },
        { campo: 'ocupantes', label: 'Ocupantes' },
      ],
      confortos: [
        { campo: 'arcondicionado', label: 'Ar-Condicionado' },
        { campo: 'travasEletricas', label: 'Travas Elétricas' },
        { campo: 'arquente', label: 'Ar Quente' },
        { campo: 'pilotoAutomatico', label: 'Piloto Automático' },
        {
          campo: 'regulagemAlturaVolante',
          label: 'Regulagem de Altura do Volante',
        },
        { campo: 'conforto.trioEletrico', label: 'Trio Elétrico' },
        { campo: 'cdplayer', label: 'CD Player' },
        { campo: 'cdplayerMP3', label: 'CD Player MP3' },
        { campo: 'usb', label: 'Entradas USB' },
        { campo: 'radioFmAm', label: 'Radio FM/AM' },
        { campo: 'kitMultimidia', label: 'Kit Multimidia' },
        { campo: 'bancosDeCouro', label: 'Bancos de Couro' },
        { campo: 'ajusteAlturaBanco', label: 'Ajuste de altura do banco' },
        { campo: 'ajusteEletricoBanco', label: 'Ajuste elétrico do banco' },
        {
          campo: 'vidrosEletricosDianteiros',
          label: 'Vidros elétricos Dianteiros',
        },
        {
          campo: 'vidrosEletricosTraseiros',
          label: 'Vidros elétricos Traseiro',
        },
        { campo: 'desembTraseiro', label: 'Desembaçador Traseiro' },
        { campo: 'tetoSolar', label: 'Teto Solar' },
      ],
      segurancas: [
        { campo: 'abs', label: 'ABS' },
        { campo: 'airbagMotorista', label: 'Airbag do motorista' },
        { campo: 'airbagPassageiro', label: 'Airbag do passageiro' },
        { campo: 'airbagLateral', label: 'Airbag Lateral' },
        { campo: 'controleDeTracao', label: 'Controle de Tração' },
        { campo: 'ebd', label: 'Distribuição eletrônica de frenagem' },
        { campo: 'computadorDeBordo', label: 'Computador de Bordo' },
        { campo: 'sensorDeFarol', label: 'Sensor de Farol' },
        { campo: 'farolDeNeblina', label: 'Farol de Neblina' },
      ],
    };
    console.log(this.form);
  }

  onSubmit() {
    if (this.idFrom != this.idTo) this.form.patchValue({ id: undefined });
    console.log(this.form);
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

  getFormGroup(campo: string) {
    return this.form.get(campo) as FormGroup;
  }

  trySubmit() {
    console.log(this.form);
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
