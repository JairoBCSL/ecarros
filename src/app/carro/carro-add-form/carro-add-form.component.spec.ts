import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroAddFormComponent } from './carro-add-form.component';

describe('CarroAddFormComponent', () => {
  let component: CarroAddFormComponent;
  let fixture: ComponentFixture<CarroAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
