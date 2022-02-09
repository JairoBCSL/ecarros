import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroEditCheckComponent } from './carro-edit-check.component';

describe('CarroEditCheckComponent', () => {
  let component: CarroEditCheckComponent;
  let fixture: ComponentFixture<CarroEditCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroEditCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroEditCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
