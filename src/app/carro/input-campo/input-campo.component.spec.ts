import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCampoComponent } from './input-campo.component';

describe('InputCampoComponent', () => {
  let component: InputCampoComponent;
  let fixture: ComponentFixture<InputCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCampoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
