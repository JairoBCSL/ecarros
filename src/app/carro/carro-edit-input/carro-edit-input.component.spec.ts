import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroEditInputComponent } from './carro-edit-input.component';

describe('CarroEditInputComponent', () => {
  let component: CarroEditInputComponent;
  let fixture: ComponentFixture<CarroEditInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroEditInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroEditInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
