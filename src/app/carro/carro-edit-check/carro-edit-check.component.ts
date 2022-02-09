import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carro-edit-check',
  templateUrl: './carro-edit-check.component.html',
  styleUrls: ['./carro-edit-check.component.css'],
})
export class CarroEditCheckComponent implements OnInit {
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
