import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroEditFormComponent } from './carro-edit-form.component';

describe('CarroAddFormComponent', () => {
  let component: CarroEditFormComponent;
  let fixture: ComponentFixture<CarroEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarroEditFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
