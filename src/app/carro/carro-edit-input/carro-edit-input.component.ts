import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carro-edit-input',
  templateUrl: './carro-edit-input.component.html',
  styleUrls: ['./carro-edit-input.component.css'],
})
export class CarroEditInputComponent implements OnInit {
  //@Input() formData: any;
  @Input() form: FormGroup;
  @Input() campos: any;
  @Output() formData: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //console.log(this.formData);
    //this.form = this.formBuilder.group(this.formData);
    //console.log(this.form);
    this.formData = this.form.value;
    console.log(this.formData);
  }

  getControl(campo: string) {
    return this.form.get(campo) as FormControl;
  }

  onSubmit() {
    console.log('Form: ' + this.form);
  }
}
