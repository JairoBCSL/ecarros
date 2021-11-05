import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCampoComponent } from './checkbox-campo.component';

describe('CheckboxCampoComponent', () => {
  let component: CheckboxCampoComponent;
  let fixture: ComponentFixture<CheckboxCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxCampoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
